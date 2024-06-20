import Navbar from './components/nav-bar';
import './style.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-container">
      <nav className="nav-area">
        <Navbar />
      </nav>
      <main className="main-area">{children}</main>
    </section>
  );
}
