import { Link} from "react-router-dom"
import { Button } from "../css-components/Buttons"
import CardContent from "../css-components/CardContent"
import { Card } from "../css-components/Card"
import Textarea from "../css-components/Textarea"
import CardHeader from "../css-components/CardHeader"
import { Input } from "../css-components/Input"
import Section1 from "../css-components/scrollto"
import { blogatom,postUpdateatom } from "./atoms"
import axios from "axios"
import { useRef } from "react"
import { useRecoilState } from "recoil"
import { CardRender } from "./CardRender"
import { useMemo ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
export default function Dashboard(){
const navigate=useNavigate()
    const token=localStorage.getItem('token')
    if(token){
    const [posts,setPosts]=useRecoilState(blogatom)
    const [createpost,setcreatepost]=useRecoilState(postUpdateatom)
    useEffect(() => {
        const fetchData = async () => {
          try {
          let data = '';
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/posts',
  headers: { 
    'Authorization': `Bearer ${token}`
  },
  data : data
};

axios.request(config)
.then((response) => {
  setPosts(response.data.response[0]?.posts)
})
.catch((error) => {
  console.log(error);
});
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        };
        fetchData();
      }, [createpost]);
      const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 1000)+1000;
      }, []);
    const scrollToRef = useRef<HTMLDivElement>(null)
    
    return( <div key="1" className="flex flex-col min-h-screen">
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-lg font-bold" to={"/dashboard"}>
          Blog Dashboard
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="hover:underline" to={"/dashboard"}>
            Home
          </Link>
          <Link className="hover:underline" to={"/"}>
            Blogs
          </Link>
          <Section1 scrollToRef={scrollToRef}></Section1>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button label={"Logout"} onClick={()=>{
            navigate('/signin')
        }}>
        </Button>
      </div>
    </header>
    <main className="flex-1 p-6 md:p-10">
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardRender posts={posts}></CardRender>
        </div>
      </section>
      <br />
      <br />
      <section>
        <h2 className="text-2xl font-bold mb-4">Blog Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
            <h2 className="dark:text-2xl ">Total Views</h2>
            </CardHeader>
            <CardContent>
              <div className="text-4xl ">{randomNumber}</div>
            </CardContent>
          </Card>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
        <form id='asds' className="space-y-4">
          <div>
            <Input label="Enter title" onChange={(e)=>{setcreatepost((prevUser) => ({
                  ...prevUser,
                  title: e.target.value
                }));}
                } placeholder="Enter blog post title" />
          </div>
          <div>
            <CardHeader >Content</CardHeader>
            <Textarea placeholder={"Enter blog post content"} onChange={(e)=>{setcreatepost((prevUser) => ({
                  ...prevUser,
                  content: e.target.value
                }));}} prop={true} />
          </div>
          <div ref={scrollToRef} >
          </div>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={(e)=>{
            e.preventDefault()
            let data = JSON.stringify({
  "title": `${createpost.title}`,
  "content": `${createpost.content}`
});
 let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://backend.nakshvashisth.workers.dev/api/v1/blog/create',
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
  },
  data : data
};
axios.request(config)
.then((response) => {
  setcreatepost({
    title: response.data.response.title,
    content:response.data.response.title
  });
  console.log(createpost)
})
.catch((error) => {
  console.log(error);
});
}}>Submit</button>
        </form>
      </section>
    </main>
  </div>
  )}
  else useEffect(()=>{
    navigate('/signin')})
}
