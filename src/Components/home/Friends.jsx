import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { getFriends } from "@/lib/friendsData";

const Friends = async () => {
  const friends = await getFriends();

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s === "overdue") return "bg-red-500 text-white";
    if (s === "almost due") return "bg-orange-400 text-white";
    if (s === "on-track") return "bg-emerald-800 text-white";
    return "bg-gray-400 text-white";
  };

  return (
    <section className="p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-8 text-slate-800">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            /* 1. Wrap the card in a Link component */
            <Link 
              key={friend.id} 
              href={`/friend-details/${friend.id}`}
              className="block" // Ensures the link behaves like a container
            >
              <div
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:scale-[1.03] hover:shadow-lg cursor-pointer h-full"
              >
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-50"
                />
                
                <h3 className="font-bold text-lg text-slate-900 mb-1">
                  {friend.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {friend.days_since_contact}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {friend.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-md tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                <span
                  className={`px-5 py-1.5 text-[11px] font-bold rounded-full shadow-sm mt-auto ${getStatusColor(friend.status)}`}
                >
                  {friend.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;