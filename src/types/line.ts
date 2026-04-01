export type LineStatus = "Running" | "Warning" | "Stopped" | "Maintenance";
export type VibrationStatus = "Normal" | "High" | "Critical" | "N/A";

export interface LineItem {
  id: string;
  name: string;
  status: LineStatus;
  temperature: string;
  vibration: VibrationStatus;
  outputPerHour: number;
  uptime: string;
}
