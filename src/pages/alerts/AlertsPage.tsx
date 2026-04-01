import { alertsMock } from "@/services/mock/alerts.mock";

const AlertsPage = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Alerts</h2>
        <p className="text-sm text-base-content/70">
          Review critical events, warnings, and sensor anomalies.
        </p>
      </div>

      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="mb-4 flex flex-wrap gap-2">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-outline">Critical</button>
            <button className="btn btn-sm btn-outline">Medium</button>
            <button className="btn btn-sm btn-outline">Low</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Line</th>
                  <th>Severity</th>
                  <th>Message</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {alertsMock.map((alert) => (
                  <tr key={alert.id}>
                    <td>{alert.id}</td>
                    <td>{alert.line}</td>
                    <td>
                      <div
                        className={`badge ${
                          alert.severity === "Critical"
                            ? "badge-error"
                            : alert.severity === "High"
                              ? "badge-warning"
                              : alert.severity === "Medium"
                                ? "badge-info"
                                : "badge-ghost"
                        }`}
                      >
                        {alert.severity}
                      </div>
                    </td>
                    <td>{alert.message}</td>
                    <td>{alert.time}</td>
                    <td>{alert.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertsPage;
