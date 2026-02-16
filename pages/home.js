import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <p>Welcome</p>

      <Link href="/profile">Go to Profile</Link>
    </div>
  );
}
