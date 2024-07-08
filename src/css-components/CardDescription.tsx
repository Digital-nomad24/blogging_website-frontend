import { ReactNode } from "react";

interface Cardprops{
    children:ReactNode
}
export default function CardDescription ({ children}:Cardprops) {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <p className=" text-black">{children}</p>
      </div>
    );
  };
  