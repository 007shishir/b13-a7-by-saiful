"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import {
  ACTION_CONFIG,
  formatTimelineDate,
  readTimelineEvents,
  subscribeTimelineEvents,
} from "@/lib/timelineEvents";

const FILTER_OPTIONS = [
  { value: "all", label: "Filter timeline" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
  { value: "meetup", label: "Meetup" },
];

export default function TimelinePage() {
  const events = useSyncExternalStore(
    subscribeTimelineEvents,
    readTimelineEvents,
    readTimelineEvents
  );
  const [filter, setFilter] = useState("all");

  const filteredEvents = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((event) => event.type === filter);
  }, [events, filter]);

  return (
    <main className="bg-slate-100 px-6 py-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-800">Timeline</h1>

        <div className="mt-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-72 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-500"
          >
            {FILTER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 space-y-3">
          {filteredEvents.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-lg px-6 py-4 text-slate-500">
              No Check in
            </div>
          ) : (
            filteredEvents.map((event) => {
              const action = ACTION_CONFIG[event.type] || ACTION_CONFIG.call;

              return (
                <article
                  key={event.id}
                  className="bg-white border border-slate-200 rounded-lg px-6 py-4 flex items-start gap-4"
                >
                  <span className="text-2xl leading-none mt-1" aria-hidden>
                    {action.emoji}
                  </span>

                  <div>
                    <p className="text-slate-900">
                      <span className="font-semibold">{action.label}</span>{" "}
                      <span className="text-slate-400">with</span>{" "}
                      <span className="text-blue-700">{event.friendName}</span>
                    </p>
                    <p className="text-sm text-slate-500">{formatTimelineDate(event.date)}</p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}