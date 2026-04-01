const SettingsPage = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-sm text-base-content/70">
          Configure monitoring preferences and demo environment options.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Display</h3>
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text">Enable auto refresh</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </label>

            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text">Show detailed line metrics</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </label>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Alert Thresholds</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Temperature Limit
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  defaultValue="80"
                  className="range range-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vibration Limit
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="65"
                  className="range range-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SettingsPage;
