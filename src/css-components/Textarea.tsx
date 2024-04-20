import React from "react"
interface textareaprops{
    placeholder:string,
    prop:boolean,
    onChange:(event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function Textarea({placeholder,prop,onChange}:textareaprops){
    return <textarea
    className="block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    placeholder={placeholder}
    onChange={onChange}
    required={prop}
  ></textarea>
}