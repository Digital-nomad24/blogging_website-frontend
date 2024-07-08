import { useRecoilState } from "recoil"
import { postUpdateatom} from "./atoms"
import { Button } from "../css-components/Buttons"
import { Input } from "../css-components/Input"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../css-components/BottomWarning"
import { useEffect } from "react"
export default function Edit(){
  const token=localStorage.getItem('token')
    const navigate=useNavigate()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [postUpdate,setpostUpdate]=useRecoilState(postUpdateatom)
    if(token){
    return  <div>
      <div className=" h-screen bg-gray-200 px-4 py-6 md:px-6 lg:py-12 xl:py-16">
      <div className="px-4 py-6 md:px-6 lg:py-12 xl:py-16">
      <div className="space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl xl:leading-[4rem]">
           Update Your Blog
          </h1>
        </div>
        <div className="w-full max-w-[800px] mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your information to create an account
                </p>
            </div>
            <div className="space-y-2">
            <Input onChange={(e)=>{
                setpostUpdate((prevUser) => ({
                  ...prevUser,
                  title: e.target.value
                }));
              }} placeholder="Title" label="Enter your Title" />
            </div>
            <div className="space-y-2">
            <Input onChange={(e)=>{
                setpostUpdate((prevUser) => ({
                  ...prevUser,
                  content: e.target.value
                }));
              }} label="Enter the content"  placeholder="this is the content" />
            </div>
            <Button label="Update" onClick={async ()=>{
        let data = JSON.stringify({
          "content": `${postUpdate.content}`,
          "title": `${postUpdate.title}`
        });
        const token=localStorage.getItem('token')
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: `https://backend.nakshvashisth.workers.dev/api/v1/blog/update/${id}`,
          headers: { 
            'Authorization':`Bearer ${token}`
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          navigate('/dashboard')
        })
        .catch((error) => {
          console.log(error);
        });
      }}></Button>
      <div>
      </div>
      <BottomWarning label={""} buttonText={"Back to dashboard"} to={"/dashboard"} />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  }else {
    useEffect(()=>{
      navigate('/signin')
    })
  }
}
