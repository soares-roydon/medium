function Avatar({ name, size }: { name: string; size: string }) {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-blue-200 border border-slate-400 rounded-full`}
      >
        <span className="font-medium text-body">{name.charAt(0)}</span>
      </div>
    </>
  );
}

export default Avatar;
