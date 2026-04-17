import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 max-w-md">
        <p className="text-5xl mb-6" aria-hidden>
          ⚠️
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Page Not Found</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="btn btn-primary px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}