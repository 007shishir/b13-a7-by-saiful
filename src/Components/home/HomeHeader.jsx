import { AiOutlinePlus } from "react-icons/ai";

const HomeHeader = () => {
  return (
    <section className="mx-auto w-full ">
      <div className="mx-auto flex w-full  flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="mt-8 inline-flex items-center rounded-lg bg-emerald-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200">
          <AiOutlinePlus className="mr-2 h-4 w-4" />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default HomeHeader;