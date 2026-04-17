import HomeHeader from "@/Components/home/HomeHeader";
import HomeStats from "@/Components/home/HomeStats";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col  py-16 px-4 md:px-12 bg-white dark:bg-black sm:items-start">
        <HomeHeader></HomeHeader>
        <HomeStats></HomeStats>
      </main>
    </div>
  );
}
