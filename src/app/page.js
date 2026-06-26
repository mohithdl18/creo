import { headers } from "next/headers";
import { redirect } from "next/navigation";

import DesktopHome from "@/components/DesktopHome"; // <-- your current homepage component

export default async function Home() {
  const userAgent = (await headers()).get("user-agent") || "";

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
      userAgent
    );

  if (isMobile) {
    redirect("/mobile");
  }

  return <DesktopHome />;
}