function BlogsSkeletonCard() {
  return (
    <div className="flex justify-center mt-4 animate-pulse">
      <div className="pb-4 pt-3 px-3 border rounded-md border-zinc-50 bg-zinc-100 w-5/6 xl:w-1/2">
        <div className="flex items-center gap-1 text-xs mb-3">
          <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
          <div className="w-26 h-3 rounded-2xl bg-zinc-200"></div>
        </div>
        <div className="w-26 h-6 rounded-2xl bg-zinc-200"></div>
        <div className="w-96 h-4 rounded-2xl bg-zinc-200 mb-4 mt-2"></div>
        <div className="w-16 h-3 rounded-2xl bg-zinc-200"></div>
      </div>
    </div>
  );
}

export default BlogsSkeletonCard;
