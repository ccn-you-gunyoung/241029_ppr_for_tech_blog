import { Skeleton as Ske } from "@/components/ui/skeleton";

export default function Skeleton() {
  return (
    <section className="colonian-info">
      <div className="profile">
        <Ske className="h-[64px] w-[64px] rounded-full" />
        <Ske className="w-full" />
      </div>
    </section>
  );
}
