import { ReactNode } from "react";

interface Cardprops{
    children:ReactNode
}
export default function CardDescription ({ children}:Cardprops) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-700">{children}</p>
      </div>
    );
  };
  