import './nav-link.css';

type linkArray = { name: string; href: string }[];

const links: linkArray = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Invoices', href: '/dashboard/invoices' },
  { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLink() {
  return (
    <div className="link-area">
      {links.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name}
        </a>
      ))}
    </div>
  );
}
