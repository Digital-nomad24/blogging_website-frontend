import { Link } from "react-router-dom"
import { Button } from "../css-components/Buttons"
import CardContent from "../css-components/CardContent"
import { Card } from "../css-components/Card"
import Textarea from "../css-components/Textarea"
import CardHeader from "../css-components/CardHeader"
import { Input } from "../css-components/Input"
import Section1 from "../css-components/scrollto"
import { blogatom, postUpdateatom } from "./atoms"
import axios from "axios"
import { useRef } from "react"
import { useRecoilState } from "recoil"
import { CardRender } from "./CardRender"
import { useMemo, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [posts, setPosts] = useRecoilState(blogatom)
  const [createPost, setCreatePost] = useRecoilState(postUpdateatom)

  useEffect(() => {
    if (!token) {
      navigate('/signin')
      return
    }
    
    const fetchData = async () => {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/posts',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const response = await axios.request(config)
        setPosts(response.data.response[0]?.posts)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [createPost]);

  const randomNumber = useMemo(() => Math.floor(Math.random() * 1000) + 1000, []);

  const scrollToRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <Link className="text-lg font-bold hover:underline" to="/dashboard">
            Blog Dashboard
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Section1 scrollToRef={scrollToRef} />
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button label="Logout" onClick={() => {
            navigate('/signin')
            localStorage.clear()
          }} />
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10 bg-gray shadow-inner">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardRender posts={posts} />
          </div>
        </section>
        <section className="my-8 bg-gray shadow-inner">
          <span className="text-2xl font-bold mb-4">Blog Analytics</span><span> &#40;will be adding it soon for now just random numbers&#41;</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Total Views</h2>
              </CardHeader>
              <CardContent>
                <div className="text-4xl">{randomNumber}</div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
          <form className="space-y-4">
            <div>
              <Input label="Enter title" onChange={(e) => setCreatePost(prev => ({ ...prev, title: e.target.value }))} placeholder="Enter blog post title" />
            </div>
            <div>
              <CardHeader>Enter content</CardHeader>
              <Textarea placeholder="Enter blog post content" onChange={(e) => setCreatePost(prev => ({ ...prev, content: e.target.value }))} prop={true} />
            </div>
            <div ref={scrollToRef} />
            <button className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300" onClick={(e) => {
              e.preventDefault()
              let data = JSON.stringify({
                "title": createPost.title,
                "content": createPost.content
              });
              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://backend.nakshvashisth.workers.dev/api/v1/blog/create',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
                data: data
              };
              axios.request(config)
                .then((response) => {
                  setCreatePost({
                    title: response.data.response.title,
                    content: response.data.response.content
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            }}>Submit</button>
          </form>
        </section>
      </main>
    </div>
  )
}
