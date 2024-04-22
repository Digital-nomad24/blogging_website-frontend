import { Link } from "react-router-dom"
import { Button } from "../css-components/Buttons"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { CardRenderMain } from "./CardRenderMain"
import {  useRecoilState } from "recoil"
import { blogatom } from "./atoms"
export default function Landing(){
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const [posts,setPosts]=useRecoilState(blogatom)
    useEffect(() => {
      const fetchData = async () => {
        try {
        let data = '';
let config = {
method: 'get',
maxBodyLength: Infinity,
url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/bulk',
data : data
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
    return  (
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" to="#">
            <img
                        alt="Cover image"
                        className="h-10 w-10"
                        height="225"
                        onClick={()=>{navigate('/')}}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnWXvVBvolRPYG33wGk1VkJCLks1ZFKnxEsBvPAipjky0luHFPZEISXnQyNkjy3HOP1g&usqp=CAU"
                        width="400"
                      /><span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" to="/dashboard">
                Dashboard
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                Pricing
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                Contact
              </Link>{(token)?<Button label={"Delete Account"} onClick={() => {
                    let data = '';
                    let config = {
                      method: 'delete',
                      maxBodyLength: Infinity,
                      url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/delete',
                      headers: { 
                        'Authorization': `Bearer ${token}`
                      },
                      data : data
                    };
                    
                    axios.request(config)
                    .then(() => {
                      localStorage.clear()
                      navigate('/signup')
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                  } }></Button>:null}
            </nav>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container flex flex-col items-center px-4 md:px-6 text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Blog It
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam quas quos placeat saepe sequi dolorum asperiores veritatis provident? Amet debitis quo, laudantium impedit possimus corporis sint. Perferendis, dignissimos voluptatem!
                  </p>
                </div>
                <div className="flex justify-center items-center">
                <div className="mx-auto w-full max-w-sm space-y-2">
                {(!token)?<><Button label={"Sign Up"} onClick={() => {
                    navigate('/signup')
                  } }></Button><p className="text-xs text-gray-500 dark:text-gray-400">
                      Sign up to get notified when we launch.
                    </p></>:null}
                  </div>
        </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24">
              <div className="container grid items-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Featured Articles</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum in doloribus saepe eaque non. Fugit voluptatem, cumque iure mollitia odit laboriosam perspiciatis, earum inventore facilis harum, impedit labore provident.
                  </p>
                </div>
                <div className="my-10 mx-20 grid max-w-8xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6">
                  <CardRenderMain posts={posts} ></CardRenderMain>
                  {/* <Card>
                    <div className="grid gap-2">
                      <img
                        alt="Cover image"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                        height="225"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4WOvo4pTa48z54EIYWJMHLSWnMQKYqPUKmr2ae8YBw&s"
                        width="400"
                      />
                      <CardContent >
                        <h3 className="text-base font-bold">Introducing the Blog</h3>
                        <p  className=" text-center text-sm text-gray-500 dark:text-gray-400">
                          Learn what's behind the scenes of our blog and how you can start your own.
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                  <Card>
                    <div className="grid gap-2">
                      <img
                        alt="Cover image"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                        height="225"
                        src="https://s.studiobinder.com/wp-content/uploads/2021/02/Juxtaposing-two-subjects.jpg"
                        width="400"
                      />
                      <CardContent >
                        <h3 className="text-base font-bold">The Art of Web development by Nakshatra</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta, ex exercitationem quas natus tempore dolorem nihil quaerat voluptate corporis molestiae dolorum nemo quasi voluptatibus, cupiditate veritatis repellendus nesciunt. Vitae?
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                  <Card>
                    <div className="grid gap-2">
                      <img
                        alt="Cover image"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                        height="225"
                        src="https://i.pinimg.com/736x/0b/fb/7a/0bfb7a0186b1e2c89dd7bbd4d016a9ce.jpg"
                        width="400"
                      />
                      <CardContent >
                        <h3 className="text-base font-bold">The Power of Technology</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe natus voluptatibus reiciendis ipsum, nam nisi eveniet impedit expedita dolorum quia aut fuga amet ut voluptatum, at sapiente magnam. Deserunt, pariatur.
                        </p>
                      </CardContent>
                    </div>
                  </Card> */}
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 border-t">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                      Stay up to date with our latest posts
                    </h2>
                    <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Sign up for our newsletter to get notified about new articles and exclusive content.
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-sm space-y-2">
                  {(!token)?<><Button label={"Sign Up"} onClick={() => {
                    navigate('/signup')
                  } }></Button><p className="text-xs text-gray-500 dark:text-gray-400">
                      Sign up to get notified when we launch.
                    </p></>:null}      
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
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
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Blog Inc. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" to="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" to="#">
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      )
}