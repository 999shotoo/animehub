import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <main className="md:px-20 md:py-4">
        <Skeleton className="h-[95vh] rounded-xl" />
      </main>
    </>
  );
}
