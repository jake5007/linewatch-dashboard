import type { AlertItem } from "@/types/alert";

export const alertsMock: AlertItem[] = [
  {
    id: "AL-1001",
    line: "Line A",
    severity: "Critical",
    message: "Motor temperature exceeded safety limit",
    time: "09:12",
    status: "Open",
  },
  {
    id: "AL-1002",
    line: "Line C",
    severity: "Medium",
    message: "Pressure reading unstable",
    time: "09:24",
    status: "Acknowledged",
  },
  {
    id: "AL-1003",
    line: "Line F",
    severity: "Low",
    message: "Sensor response delay detected",
    time: "09:41",
    status: "Open",
  },
  {
    id: "AL-1004",
    line: "Line B",
    severity: "High",
    message: "Vibration exceeded warning threshold",
    time: "10:03",
    status: "Resolved",
  },
];
