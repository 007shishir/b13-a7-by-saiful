"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { readTimelineEvents, subscribeTimelineEvents } from "@/lib/timelineEvents";

const CHART_COLORS = {
  text: "#7c3aed",
  call: "#0f766e",
  video: "#22c55e",
};

export default function StatsPage() {
  const events = useSyncExternalStore(
    subscribeTimelineEvents,
    readTimelineEvents,
    readTimelineEvents
  );

  const chartData = useMemo(() => {
    const counts = { text: 0, call: 0, video: 0 };

    events.forEach((event) => {
      if (event.type === "text" || event.type === "call" || event.type === "video") {
        counts[event.type] += 1;
      }
    });

    return [
      { name: "Text", value: counts.text, key: "text" },
      { name: "Call", value: counts.call, key: "call" },
      { name: "Video", value: counts.video, key: "video" },
    ];
  }, [events]);

  const totalInteractions = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <main className=" bg-slate-100 px-6 py-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-800">Friendship Analytics</h1>

        <div className="mt-6 bg-white border border-slate-200 rounded-lg p-6 md:p-8">
          <p className="text-slate-700 font-medium mb-5">By Interaction Type</p>

          {totalInteractions === 0 ? (
            <div className="h-52 flex items-center justify-center text-slate-500 font-medium">
              No Check in
            </div>
          ) : (
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={-270}
                    stroke="#ffffff"
                    strokeWidth={5}
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.key} fill={CHART_COLORS[entry.key]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="mt-4 flex justify-center items-center gap-6 text-xs text-slate-500">
            {chartData.map((item) => (
              <div key={item.key} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: CHART_COLORS[item.key] }}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}