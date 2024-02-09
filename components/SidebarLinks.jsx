import Link from "next/link";
import React from "react";
import {
  BsChat,
  BsMenuButtonFill,
  BsMenuApp,
  BsPersonBadge,
} from "react-icons/bs";

const links = [
  {
    href: "/chat",
    label: "chat",
    icon: <BsChat />,
  },
  {
    href: "/tours",
    label: "tours",
    icon: <BsMenuApp />,
  },
  {
    href: "/tours/new-tour",
    label: "new tour",
    icon: <BsMenuButtonFill />,
  },
  {
    href: "/profile",
    label: "profile",
    icon: <BsPersonBadge />,
  },
];

const SidebarLinks = () => {
  return (
    <div className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href} className="text-lg">
            <Link href={link.href} className="capitalize hover:text-primary">
            <span className="mx-4">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
