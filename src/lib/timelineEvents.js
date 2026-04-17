export const ACTION_CONFIG = {
  call: {
    label: "Call",
    emoji: "📞",
    toast: "Call check-in added to timeline",
  },
  text: {
    label: "Text",
    emoji: "💬",
    toast: "Text check-in added to timeline",
  },
  meetup: {
    label: "Meetup",
    emoji: "🤝",
    toast: "Meetup check-in added to timeline",
  },
  video: {
    label: "Video",
    emoji: "📹",
    toast: "Video check-in added to timeline",
  },
};

export const EMPTY_TIMELINE_EVENTS = [];
let timelineEvents = EMPTY_TIMELINE_EVENTS;
const listeners = new Set();

const sortByDateDesc = (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime();

export const readTimelineEvents = () => {
  return timelineEvents;
};

export const createTimelineEvent = ({ type, friendName }) => {
  const today = new Date();
  const date = today.toISOString().split("T")[0];

  return {
    id: `${today.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    friendName,
    date,
  };
};

export const addTimelineEvent = (event) => {
  const updated = [event, ...timelineEvents].sort(sortByDateDesc);
  timelineEvents = updated;
  listeners.forEach((listener) => listener());
};

export const subscribeTimelineEvents = (callback) => {
  listeners.add(callback);

  return () => {
    listeners.delete(callback);
  };
};

export const formatTimelineDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
