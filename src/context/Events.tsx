import { createContext } from "react";

const EVENT_COLORS = ["red", "green", "blue"] as const;

type Event = {
  id: string;
  name: string;
  color: (typeof EVENT_COLORS)[number];
  date: Date;
} & (
  | { allDay: false; startTime: string; endTime: string }
  | { allDay: true; startTime?: never; endTime?: never }
);

type EventsContextType = {
  events: Event[];
};

const Context = createContext<EventsContextType | null>(null);
