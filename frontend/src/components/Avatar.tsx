function Avatar({ name, size }: { name: string; size?: "large" }) {
  return (
    <>
      {size === "large" ? (
        <div
          className={`flex items-center justify-center w-9 h-9 bg-violet-500 border border-slate-500 rounded-full leading-none`}
        >
          <span className="font-medium text-white">{name.charAt(0)}</span>
        </div>
      ) : (
        <div
          className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-blue-50 border border-slate-400 rounded-full`}
        >
          <span className="font-medium text-body text-sm">{name?.charAt(0).toUpperCase() ?? "?"}</span>
        </div>
      )}
    </>
  );
}

export default Avatar;
