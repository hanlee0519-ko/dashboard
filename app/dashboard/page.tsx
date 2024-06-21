import { fetchCardData, fetchRevenue } from "../lib/data";
import { Card } from "./components/cards";
import RevenueChart from "./components/revenue-chart";

export default async function DashboardPage() {
  const revenue = await fetchRevenue();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <h1>Dashboard Page</h1>
      <div className="card-area">
        <Card title="Collected" value={totalPaidInvoices} />
        <Card title="Pending" value={totalPendingInvoices} />
        <Card title="Total Invoices" value={numberOfInvoices} />
        <Card title="Total Customers" value={numberOfCustomers} />
      </div>
      <div className="chart-area">
        <RevenueChart revenue={revenue} />
      </div>
    </>
  );
}
