import { ReactNode } from "react"

interface Subheadingprops{
    children:ReactNode
}
export default function CardHeader({children}:Subheadingprops) {
    return <div className="text-sm font-medium text-left py-2">
      {children}
    </div>
  }
  