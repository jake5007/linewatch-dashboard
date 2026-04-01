import { alertsMock } from "@/services/mock/alerts.mock";
import { dashboardOverviewMock } from "@/services/mock/dashboard.mock";

const DashboardPage = () => {
  const summaryCards = dashboardOverviewMock.summaryCards;
  const recentAlerts = alertsMock.slice(0, 3);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Production Overview</h2>
        <p className="text-sm text-base-content/70">
          Real-time factory line visibility and monitoring status.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="card border border-base-300 bg-base-100 shadow-sm"
          >
            <div className="card-body">
              <p className="text-sm text-base-content/60">{card.title}</p>
              <h3 className="text-3xl font-bold">{card.value}</h3>
              <p className="text-sm text-base-content/70">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Production Trend</h3>
            <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-base-300 bg-base-200">
              <span className="text-base-content/60">
                Chart area placeholder
              </span>
            </div>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Recent Alerts</h3>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="rounded-xl border border-base-300 bg-base-200 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{alert.line}</p>
                      <p className="text-sm text-base-content/70">
                        {alert.message}
                      </p>
                    </div>
                    <div className="badge badge-outline">{alert.severity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DashboardPage;
