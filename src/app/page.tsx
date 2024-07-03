import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex w-full flex-col items-center">
        <Image
          className="relative mb-8 text-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="mb-8 text-center text-3xl font-bold">
          Next.JS Starter Project
        </h1>
      </div>
    </main>
  );
}
