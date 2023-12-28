// import { delay } from "@/lib/delay";

export default async function Loading() {
  // await delay(10000);
  return (
    <main className="flex flex-1 items-center justify-center text-7xl text-center bg-black w-full h-full absolute top-0 left-0 z-100">
      <h1 className="text-white text-7xl">Loading component page...</h1>
      <p className="text-7xl">We are fetchin your content</p>
    </main>
  );
}
