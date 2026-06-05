import BlogsSkeletonCard from "./BlogSkeletonCard";

function BlogsSkeleton() {
    function getSkeletonCards() {
        const cards = []
        for(let i = 0; i < 6; i++) {
            cards.push(<BlogsSkeletonCard />)
        }
        return cards
    }

  return (
    <>
      {getSkeletonCards()}
    </>
  );
}

export default BlogsSkeleton;
