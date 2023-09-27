"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import keewee from "@/public/images/Keewee.png";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>...loading</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      {/* <Image src={keewee} alt="Keewee" /> */}
      <Image
        src="https://bit.ly/react-cover"
        alt="next-logo"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
      <HeavyComponent />
      {/* <div className=" justify-center text-center">
        <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </div> */}
    </main>
  );
}
