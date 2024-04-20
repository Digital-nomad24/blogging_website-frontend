import { useRecoilState } from "recoil"
import { useratom,tokenatom } from "./atoms"
import { Button } from "../css-components/Buttons"
import { Input } from "../css-components/Input"
import { useSetRecoilState } from "recoil"
import { BottomWarning } from "../css-components/BottomWarning"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Signup(){
  const navigate=useNavigate()
  const imgsource=[
    'https://plus.unsplash.com/premium_photo-1713163890188-6807aa2641de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
 "https://images.unsplash.com/photo-1710101749861-aef7c032d24d?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const randomIndex = Math.floor(Math.random() * imgsource.length);
  const randomImageSrc = imgsource[randomIndex]
    const [user,setuseratom]= useRecoilState(useratom)
    const settokenatom= useSetRecoilState(tokenatom)
    return  <div>
      <div className="px-4 py-6 md:px-6 lg:py-12 xl:py-16">
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl xl:leading-[4rem]">
           Create An Account
          </h1>
        </div>
        <div className="w-full max-w-[800px] mx-auto">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
            </div>
            <div className="space-y-2">
              <Input onChange={(e)=>{
                setuseratom((prevUser) => ({
                  ...prevUser,
                  name: e.target.value
                }));
              }} placeholder="naksh" label="Enter your name" />
            </div>
            <div className="space-y-2">
              <Input onChange={(e)=>{
                setuseratom((prevUser) => ({
                  ...prevUser,
                  email: e.target.value
                }));
              }} placeholder="m@example.com" label="Enter your email" />
            </div>
            <div className="space-y-2">
              <Input onChange={(e)=>{
                setuseratom((prevUser) => ({
                  ...prevUser,
                  password: e.target.value
                }));
              }} label="Enter your password"  placeholder="password" />
            </div>
            <Button label="Create an account" onClick={async ()=>{
        let data = JSON.stringify({
          "email": `${user.email}`,
          "name": `${user.name}`,
          "password": `${user.password}`
        });
        console.log(data)
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/signup',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          localStorage.setItem('token',response.data.token)
          settokenatom(response.data.token)
          navigate('/dashboard')
        })
        .catch((error) => {
          console.log(error);
        });
        
      }}></Button>
      <div>
      <Button label={'Back to Home'} onClick={()=>{
        navigate('/')
      }}></Button>
      </div>
      <BottomWarning label={"Already a user?"} buttonText={"Sign in"} to={"/signin"} />
          </div>
        </div>
      </div>
      <div className="invisible md:visible lg:visible space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">
          Welcome to Blogging
          </h2>
          <p>
          At Blogging, we believe in the power of words to inspire, inform, and connect. Whether you're an avid reader, a passionate writer, or someone looking for a place to share your thoughts, you've come to the right place.
          </p>
          <p>
          Our platform is a vibrant community where writers of all backgrounds and interests come together to create, share, and discover compelling content. From thought-provoking essays to captivating stories, from insightful analysis to practical advice, our blogosphere has something for everyone.
          </p>
          <p>
          Explore a diverse range of topics, including:
          </p>
          <ul>
            <li> &bull; Lifestyle: From travel tips to wellness advice, discover ways to live your best life</li>
            <li>&bull; Culture: Dive into discussions about art, literature, film, and more</li>
            <li>&bull; Technology: Stay updated on the latest tech trends, gadgets, and innovations</li>
            <li>&bull; And much more: Explore countless other topics that pique your curiosity.</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <img
            alt="Cover image"
            className="aspect-video rounded-lg object-cover"
            height={600}
            src={`${randomImageSrc}`}
            width={800}
          />
        </div>
      </div>
    </div>
  </div>
  </div>
}
