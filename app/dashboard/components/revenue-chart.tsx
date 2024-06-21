import "./revenue-chart.css";
import { generateYAxis } from "@/app/lib/utils";
import { Revenue } from "@/app/lib/definitions";

export default async function RevenueChart({
  revenue,
}: {
  revenue: Revenue[];
}) {
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className="chart-container">
      <h2 className="chart-title">Recent Revenue</h2>
      <div>
        <div className="label-container">
          <div className="label-area" style={{ height: `${chartHeight}px` }}>
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="month-container">
              <div
                className="month-area"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p>{month.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
