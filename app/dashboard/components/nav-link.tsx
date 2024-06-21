"use client";

import "./nav-link.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; href: string }[] = [
  { name: "Home", href: "/dashboard" },
  { name: "Invoices", href: "/dashboard/invoices" },
  { name: "Customers", href: "/dashboard/customers" },
];

export default function NavLink() {
  const pathname = usePathname();

  return (
    <div className="link-area">
      {links.map((link) => (
        <Link
          className={pathname === link.href ? "link-active" : "link-inActive"}
          key={link.name}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
