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
        <label className="font-medium">{label}</label>
        <input
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-slate-300 rounded bg-slate-50 px-2 py-1 focus:outline-blue-400 focus:text-slate-600 "
        />
      </div>
    </>
  );
}

export default Input;
