import type { DashboardOverview } from "@/types/dashboard";

export const dashboardOverviewMock: DashboardOverview = {
  summaryCards: [
    {
      title: "Active Lines",
      value: "8",
      description: "2 lines in maintenance",
    },
    {
      title: "OEE",
      value: "91.8%",
      description: "+1.4% from yesterday",
    },
    {
      title: "Open Alerts",
      value: "12",
      description: "3 critical alerts",
    },
    {
      title: "Output",
      value: "14,280",
      description: "units today",
    },
  ],
  productionTrend: [
    { time: "08:00", output: 1120 },
    { time: "09:00", output: 1180 },
    { time: "10:00", output: 1210 },
    { time: "11:00", output: 1170 },
    { time: "12:00", output: 1100 },
    { time: "13:00", output: 1250 },
    { time: "14:00", output: 1320 },
    { time: "15:00", output: 1280 },
  ],
};
