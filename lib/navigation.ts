export type NavItem = {
  href: string;
  label: string;
};

export const marketingNav: NavItem[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/sign-in", label: "Sign in" },
  { href: "/sign-up", label: "Start free" },
];

export const dashboardNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/properties", label: "Properties" },
  { href: "/dashboard/units", label: "Units" },
  { href: "/dashboard/tickets", label: "Tickets" },
  { href: "/dashboard/documents", label: "Documents" },
  { href: "/dashboard/contacts", label: "Contacts" },
  { href: "/dashboard/templates", label: "Templates" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/settings", label: "Settings" },
];
