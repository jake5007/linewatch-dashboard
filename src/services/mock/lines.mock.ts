import type { LineItem } from "@/types/line";

export const linesMock: LineItem[] = [
  {
    id: "LN-001",
    name: "Line A",
    status: "Running",
    temperature: "72°C",
    vibration: "Normal",
    outputPerHour: 1820,
    uptime: "98.4%",
  },
  {
    id: "LN-002",
    name: "Line B",
    status: "Warning",
    temperature: "81°C",
    vibration: "High",
    outputPerHour: 1650,
    uptime: "92.1%",
  },
  {
    id: "LN-003",
    name: "Line C",
    status: "Stopped",
    temperature: "N/A",
    vibration: "N/A",
    outputPerHour: 0,
    uptime: "0.0%",
  },
  {
    id: "LN-004",
    name: "Line D",
    status: "Running",
    temperature: "69°C",
    vibration: "Normal",
    outputPerHour: 1760,
    uptime: "97.2%",
  },
];
