"use client";

import { FaPhone, FaRegCommentDots, FaVideo } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ACTION_CONFIG,
  addTimelineEvent,
  createTimelineEvent,
} from "@/lib/timelineEvents";

const BUTTONS = [
  { type: "call", label: "Call", Icon: FaPhone },
  { type: "text", label: "Text", Icon: FaRegCommentDots },
  { type: "video", label: "Video", Icon: FaVideo },
];

export default function QuickCheckInButtons({ friendName }) {
  const handleCheckIn = (type) => {
    const event = createTimelineEvent({ type, friendName });
    addTimelineEvent(event);
    toast.success(ACTION_CONFIG[type].toast);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {BUTTONS.map(({ type, label, Icon }) => (
          <button
            key={type}
            onClick={() => handleCheckIn(type)}
            className="flex flex-col items-center py-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all"
          >
            <Icon className="text-slate-700 text-xl mb-2" />
            <span className="text-sm font-bold text-slate-700">{label}</span>
          </button>
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}
