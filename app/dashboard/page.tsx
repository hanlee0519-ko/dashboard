import { fetchRevenue } from "../lib/data";
import RevenueChart from "./components/revenue-chart";

export default async function DashboardPage() {
  const revenue = await fetchRevenue();

  return (
    <main>
      <h1>Dashboard Page</h1>
      <div>
        <h1>{'"1.Card-Area"'}</h1>
      </div>
      <div>
        <RevenueChart revenue={revenue} />
      </div>
      <div>
        <h1>{'"3.Invoice-Area"'}</h1>
      </div>
    </main>
  );
}
