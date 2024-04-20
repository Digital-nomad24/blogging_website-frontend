interface ButtonProps {
  onClick: () => void;
  label:string
}
export function Button({ onClick, label }: ButtonProps) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      {label}
    </button>
  );
}
