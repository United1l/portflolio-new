import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#14213d]">
      <header className="w-full h-1/12 flex items-center fixed top-0 text-white">
        <h1 className="text-3xl font-bold pl-[5%]">
          Michael
        </h1>
        <nav className="ml-auto space-x-10 pr-[10%] text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </main>
  );
}
