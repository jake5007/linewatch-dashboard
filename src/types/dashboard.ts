export interface SummaryCard {
  title: string;
  value: string;
  description: string;
}

export interface ProductionTrendPoint {
  time: string;
  output: number;
}

export interface DashboardOverview {
  summaryCards: SummaryCard[];
  productionTrend: ProductionTrendPoint[];
}
