import { redirect } from "next/navigation";

export default function HomePage() {
  // Change this path to whichever page you want as the initial page
  redirect("/login");
}
