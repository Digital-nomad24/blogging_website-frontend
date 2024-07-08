import { Link } from "react-router-dom"
import { Button } from "../css-components/Buttons"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { CardRenderMain } from "./CardRenderMain"
import { useRecoilState } from "recoil"
import { blogatom } from "./atoms"

export default function Landing() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [posts, setPosts] = useRecoilState(blogatom)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = '';
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/bulk',
          data: data
        };

        axios.request(config)
          .then((response) => {
            console.log(response.data.posts)
            setPosts(response.data.posts)
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <Link className="flex items-center justify-center" to="#">
          <img
            alt="Cover image"
            className="h-10 w-10 rounded"
            height="225"
            onClick={() => { navigate('/') }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnWXvVBvolRPYG33wGk1VkJCLks1ZFKnxEsBvPAipjky0luHFPZEISXnQyNkjy3HOP1g&usqp=CAU"
            width="400"
          /><span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4" to="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4" to="#">
            Contact
          </Link>{(token != undefined || token) ? <Button label={"Delete Account"} onClick={() => {
            let data = '';
            let config = {
              method: 'delete',
              maxBodyLength: Infinity,
              url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/delete',
              headers: {
                'Authorization': `Bearer ${token}`
              },
              data: data
            };

            axios.request(config)
              .then(() => {
                localStorage.clear()
                navigate('/signup')
              })
              .catch((error) => {
                console.log(error);
              });
          }}></Button> : null}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
          <div className="container flex flex-col items-center px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Blog It
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to Blog It, your go-to platform for the latest articles, insights, and stories. Discover, share, and get inspired!
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="mx-auto w-full max-w-sm space-y-2">
                {(!token) ? <><Button label={"Sign Up"} onClick={() => {
                  navigate('/signup')
                }}></Button><p className="text-xs">
                  Sign up to get notified when we launch.
                </p></> : null}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Featured Articles</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our handpicked selection of articles, featuring the latest trends, tips, and insights from various fields.
              </p>
            </div>
            <div className="my-10 mx-20 grid max-w-8xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6">
              <CardRenderMain posts={posts} ></CardRenderMain>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 border-t bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                  Stay Up to Date with Our Latest Posts
                </h2>
                <p className="max-w-[600px] text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for our newsletter to get notified about new articles and exclusive content.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                {(!token) ? <><Button label={"Sign Up"} onClick={() => {
                  navigate('/signup')
                }}></Button><p className="text-xs">
                  Sign up to get notified when we launch.
                </p></> : null}
                <p className="text-xs text-center">
                  Sign up to get notified when we launch.
                  <Link className="underline underline-offset-2" to="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Blog Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
