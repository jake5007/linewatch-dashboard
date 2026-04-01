import { linesMock } from "@/services/mock/lines.mock";

const LinesPage = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Line Status</h2>
        <p className="text-sm text-base-content/70">
          Monitor each production line and key equipment signals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {linesMock.map((line) => (
          <div
            key={line.id}
            className="card border border-base-300 bg-base-100 shadow-sm"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title text-lg">{line.name}</h3>
                <div
                  className={`badge ${
                    line.status === "Running"
                      ? "badge-success"
                      : line.status === "Warning"
                        ? "badge-warning"
                        : line.status === "Stopped"
                          ? "badge-error"
                          : "badge-info"
                  }`}
                >
                  {line.status}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-base-content/60">Temperature</span>
                  <span>{line.temperature}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">Vibration</span>
                  <span>{line.vibration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">Output / hr</span>
                  <span>{line.outputPerHour}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">Uptime</span>
                  <span>{line.uptime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LinesPage;
