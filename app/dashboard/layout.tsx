import Navbar from "./components/nav-bar";
import "./style.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      <div className="nav-area">
        <Navbar />
      </div>
      <div className="main-area">{children}</div>
    </div>
  );
}
