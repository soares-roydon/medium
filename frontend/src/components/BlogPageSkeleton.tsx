function BlogPageSkeleton() {
  return (
    <div className="grid grid-cols-12 min-h-screen animate-pulse">
      <div className="col-span-8 mx-6 mt-6">
        <div className="w-64 h-8 rounded-2xl bg-zinc-200 mb-6"></div>
        <div className="w-250 h-4 rounded-2xl bg-zinc-200 mb-2"></div>
        <div className="w-250 h-4 rounded-2xl bg-zinc-200 mb-2"></div>
        <div className="w-96 h-4 rounded-2xl bg-zinc-200 mb-2"></div>
      </div>
      <div className="col-span-4 mx-6 mt-6">
        <div className="w-16 h-5 rounded-2xl bg-zinc-200 mb-3"></div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
          <div className="w-14 h-3 rounded-2xl bg-zinc-200"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogPageSkeleton;
