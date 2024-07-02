import CardContent from "../css-components/CardContent"
import { Card } from "../css-components/Card"
import CardHeader from "../css-components/CardHeader"
import CardDescription from "../css-components/CardDescription"
import { Posts } from "./atoms"
type params={
  posts:Posts[] | null
}
export function CardRenderMain({posts}:params) {
    if(!posts){
        return <div></div>
    }
    else
  return (
      <>
          {posts.map((post:Posts) => (

              <Card key={Math.random()}>
                 <img
                        alt="Cover image"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                        height="225"
                        src="https://s.studiobinder.com/wp-content/uploads/2021/02/Juxtaposing-two-subjects.jpg"
                        width="400"
                      />
                  <CardHeader>
                      <h2 className="text-xl text-center ">{post.title}</h2>
                      <CardDescription>{post.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="flex justify-end gap-2">
                      </div>
                  </CardContent>
                  <div className="text-sm font-medium hover:underline underline-offset-4" >Author: {post.author?.name}</div>
              </Card>
          ))}
      </>
  );
}
