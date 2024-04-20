import { ReactNode } from "react";

interface cardprops{
    children:ReactNode
}
export function Card ({ children }:cardprops){
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {children}
      </div>
    );
  };