import { FaPhone, FaRegCommentDots, FaVideo, FaArrowLeft } from "react-icons/fa";
import { MdOutlineArchive, MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const getFriendById = async (id) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  try {
    const res = await fetch(`${baseUrl}/friends.json`, { cache: 'no-store' });
    if (!res.ok) return null;

    const friends = await res.json();
    
    // Use Number() to ensure you aren't comparing a string "1" to a number 1
    const foundFriend = friends.find((f) => Number(f.id) === Number(id));
    
    console.log("Fetched friend:", foundFriend); // This should now show the object
    return foundFriend;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export default async function FriendDetails({ params }) {
  // CRITICAL: In Next.js 15, you MUST await params
  const { friendId } = await params;
  const friend = await getFriendById(friendId);

  if (!friend) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold">Friend not found</h1>
        <p className="text-slate-500">ID searched: {friendId}</p>
        <Link href="/" className="text-blue-500 underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto bg-[#f8fafc] p-4 md:p-12 font-sans">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Profile Sidebar */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase mt-2">
              {friend.status}
            </span>
            <p className="text-slate-400 text-sm italic mt-6 leading-relaxed">
              "{friend.bio}"
            </p>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-white py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-3 text-slate-600 font-semibold hover:bg-slate-50 transition-all">
              <IoNotificationsOutline /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-3 text-slate-600 font-semibold hover:bg-slate-50 transition-all">
              <MdOutlineArchive /> Archive
            </button>
            <button className="w-full bg-white py-3 rounded-xl border border-slate-100 flex items-center justify-center gap-3 text-red-500 font-semibold hover:bg-red-50 transition-all">
              <MdDeleteOutline /> Delete
            </button>
          </div>
        </div>

        {/* Details Content */}
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-800">{friend.days_since_contact}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-800">{friend.goal}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-800 mt-1">{friend.next_due_date}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Relationship Goal</h3>
              <p className="text-slate-500 text-sm mt-1">
                Connect every <span className="font-bold text-slate-800">{friend.goal} days</span>
              </p>
            </div>
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <MdOutlineEdit /> Edit
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center py-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all">
                <FaPhone className="text-slate-700 text-xl mb-2" />
                <span className="text-sm font-bold text-slate-700">Call</span>
              </button>
              <button className="flex flex-col items-center py-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all">
                <FaRegCommentDots className="text-slate-700 text-xl mb-2" />
                <span className="text-sm font-bold text-slate-700">Text</span>
              </button>
              <button className="flex flex-col items-center py-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all">
                <FaVideo className="text-slate-700 text-xl mb-2" />
                <span className="text-sm font-bold text-slate-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}