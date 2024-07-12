import { useRecoilState } from "recoil"
import { useSetRecoilState } from "recoil"
import { signinatom ,tokenatom} from "./atoms"
import { Button } from "../css-components/Buttons"
import { Input } from "../css-components/Input"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BottomWarning } from "../css-components/BottomWarning"
import { useEffect, useState } from "react"
export default function Signin(){
  const [randomImageIndex, setRandomImageIndex] = useState(0);
  const [images] = useState([
    'https://plus.unsplash.com/premium_photo-1713163890188-6807aa2641de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
 "https://images.unsplash.com/photo-1710101749861-aef7c032d24d?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?cs=srgb&dl=pexels-shadab-1650775-4982737.jpg&fm=jpg",
 "https://wallpapers.com/images/featured/aesthetic-pictures-hv6f88paqtseqh92.jpg"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomImageIndex((prevIndex: number) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images]);
    const navigate=useNavigate()
    const settokenatom=useSetRecoilState(tokenatom)
    const [user,setUser]=useRecoilState(signinatom)
    return  <div>
      <div className=" px-4 py-6 md:px-6 lg:py-12 xl:py-16" style={{transition: 'background-image 2s ease-in-out', backgroundImage: `url(${images[randomImageIndex]})`, minHeight: '100vh' }}>
    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="space-y-4">
          <div className="w-full max-w-[800px] mx-auto">
            <div className="bg-white opacity-70 rounded-lg shadow-lg p-6 space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your information to create an account
                </p>
              </div>
              <div className="space-y-2">
            <Input onChange={(e)=>{
                setUser((prevUser) => ({
                  ...prevUser,
                  email: e.target.value
                }));
              }} placeholder="m@example.com" label="Enter your email" />
            </div>
            <div className="space-y-2">
            <Input type="password" onChange={(e)=>{
                setUser((prevUser) => ({
                  ...prevUser,
                  password: e.target.value
                }));
              }} label="Enter your password"  placeholder="password" />
            </div>
            <Button label="Sign in" onClick={async ()=>{
        let data = JSON.stringify({
          "email": `${user.email}`,
          "password": `${user.password}`
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://backend.nakshvashisth.workers.dev/api/v1/user/signin',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          localStorage.setItem('token',response.data.token)
          settokenatom(response.data.token)
        })
        .catch((error) => {
          console.log(error);
        });
        navigate('/dashboard')
      }}></Button>
      <div>
      <Button label={'Back to Home'} onClick={()=>{
        navigate('/')
      }}></Button>
      </div>
      <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
          </div>
        </div>
      <div className="invisible md:visible lg:visible bg-cover rounded-lg" style={{transition: 'background-image 2s ease-in-out', backgroundImage: `url(${images[randomImageIndex]})`, minHeight: '100vh' }}>
  <div className="bg-black bg-opacity-50 absolute inset-0"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-white ">
    <div className="space-y-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Welcome to Blog It
      </h2>
      <p className="text-lg md:text-xl">
        At Blog It, we believe in the power of words to inspire, inform, and connect. Whether you're an avid reader, a passionate writer, or someone looking for a place to share your thoughts, you've come to the right place.
      </p>
      <p className="text-lg md:text-xl">
        Our platform is a vibrant community where writers of all backgrounds and interests come together to create, share, and discover compelling content. From thought-provoking essays to captivating stories, from insightful analysis to practical advice, our blogosphere has something for everyone.
      </p>
      <p className="text-lg md:text-xl">
        Explore a diverse range of topics, including:
      </p>
      <ul className="text-lg md:text-xl list-disc list-inside">
        <li>Lifestyle: From travel tips to wellness advice, discover ways to live your best life</li>
        <li>Culture: Dive into discussions about art, literature, film, and more</li>
        <li>Technology: Stay updated on the latest tech trends, gadgets, and innovations</li>
        <li>And much more: Explore countless other topics that pique your curiosity.</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
  
}
