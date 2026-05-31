interface InputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, placeholder, type, onChange }: InputType) {
  return (
    <>
      <div className="flex flex-col gap-0.5 text-slate-800 mb-3">
        <label>{label}</label>
        <input
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-slate-300 rounded px-2 py-1 focus:outline-gray-400 focus:text-slate-600 "
        />
      </div>
    </>
  );
}

export default Input;
