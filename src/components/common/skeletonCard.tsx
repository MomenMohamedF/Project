import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 w-72 sm:w-80 md:w-[360px] lg:w-[405px]">
      <Skeleton className="h-48 w-full rounded-2xl" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex justify-between items-center mt-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
