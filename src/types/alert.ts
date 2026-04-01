export type AlertSeverity = "Critical" | "High" | "Medium" | "Low";
export type AlertStatus = "Open" | "Acknowledged" | "Resolved";

export interface AlertItem {
  id: string;
  line: string;
  severity: AlertSeverity;
  message: string;
  time: string;
  status: AlertStatus;
}
