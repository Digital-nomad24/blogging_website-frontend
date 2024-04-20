import  { ReactNode } from "react"

interface cardprops{
  children:ReactNode
}
export default function CardContent({children}:cardprops){
    return <div className="p-4">
    {children}
  </div>
}