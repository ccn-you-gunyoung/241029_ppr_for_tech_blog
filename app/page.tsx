import DynamicUserInfo from "@/components/UserInfo";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";

export const experimental_ppr = true;

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Skeleton />}>
        <DynamicUserInfo />
      </Suspense>
    </main>
  );
}
