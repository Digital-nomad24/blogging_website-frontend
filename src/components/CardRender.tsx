
import { Button } from "../css-components/Buttons"
import CardContent from "../css-components/CardContent"
import { Card } from "../css-components/Card"
import CardHeader from "../css-components/CardHeader"
import CardDescription from "../css-components/CardDescription"
import { Posts, blogatom } from "./atoms"
import axios from 'axios'
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
type params={
  posts:Posts[] | null
}
export function CardRender({posts}:params) {
  const token=localStorage.getItem('token')
    const [blog,setblog]=useRecoilState(blogatom)
    const navigate=useNavigate()
    if(!posts){
        return <div></div>
    }
    else
    if(token){
  return (
      <>
          {posts.map((post:Posts) => (
              <Card key={Math.random()}>
                  <CardHeader>
                    
                      <h2 className="text-xl text-center ">{post.title}</h2>
                      <CardDescription>{post.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="flex justify-end gap-2">
                          <Button label={"Edit"} onClick={async () => {
                            navigate('/edit?id='+post.id)
                          }} />
                          <Button label={"Delete"} onClick={async () => {
                            setblog(blog.filter(todo => todo.id !== post.id));
                            let data = '';
                            console.log(post.id)
                            let config = {
                              method: 'get',
                              maxBodyLength: Infinity,
                              url: `https://backend.nakshvashisth.workers.dev/api/v1/blog/${post.id}/delete`,
                              headers: { 
                                'Authorization':`Bearer ${token}`
                              },
                              data : data
                            };
                            
                            axios.request(config)
                            .then((response) => {
                              console.log(JSON.stringify(response.data));
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                          }} />
                      </div>
                  </CardContent>
              </Card>
          ))}
      </>
  );}
  else useEffect(()=>{navigate('/signin')})
}
