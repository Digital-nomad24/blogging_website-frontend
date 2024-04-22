import React from 'react';

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?:string
}

export function Input({ label, placeholder, onChange,type }: InputBoxProps) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
        required
        type={type}
      />
    </div>
  );
}
