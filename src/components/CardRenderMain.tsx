import CardContent from "../css-components/CardContent"
import { Card } from "../css-components/Card"
import CardHeader from "../css-components/CardHeader"
import CardDescription from "../css-components/CardDescription"
import { Posts } from "./atoms"
type params={
  posts:Posts[] | null
}
export function CardRenderMain({posts}:params) {
    const imgsrc=["https://s.studiobinder.com/wp-content/uploads/2021/02/Juxtaposing-two-subjects.jpg",
        "https://wallpapers.com/images/featured/cool-aesthetic-pictures-0c0l5hoky79s59wu.jpg",
        "https://wallpapers.com/images/high/cool-aesthetic-pictures-8wdaup93t3qsta22.webp",
        "https://wallpapers.com/images/high/cool-aesthetic-red-moon-bnxrbqlkxllv5ikn.webp"
    ]
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
                        src={imgsrc[Math.floor(Math.random()*4)]}
                        width="full"
                      />
                  <CardHeader>
                      <h2 className="text-xl text-center text-black">{post.title}</h2>
                      <CardDescription>{post.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="flex justify-end gap-2">
                      </div>
                  </CardContent>
                  
                  <div className="text-sm font-medium hover:underline underline-offset-4 text-black" >Author: {post.author?.name}</div>
              </Card>
          ))}
      </>
  );
}
