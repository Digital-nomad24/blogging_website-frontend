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
