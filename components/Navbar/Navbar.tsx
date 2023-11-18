"use client";

import {
  IconChartBar,
  IconFolder,
  IconLayoutGrid,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    icon: IconLayoutGrid,
    name: "Tareas",
    href: "/",
  },
  {
    icon: IconFolder,
    name: "Categorias",
    href: "/",
  },
  {
    icon: IconChartBar,
    name: "Estadisticas",
    href: "/",
  },
  {
    icon: IconTrash,
    name: "Papelera",
    href: "/",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <footer className="fixed bottom-0 w-full">
      <div className="navbar p-5 rounded-t-2xl justify-center bg-primary text-primary-content gap-3">
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <button
              onClick={() => handleClick(index)}
              className="flex flex-col justify-center items-center px-3"
            >
              <item.icon
                className={`w-9 h-9 ${
                  active === index ? "bg-accent rounded-lg" : ""
                } p-1`}
              />
              <span className="flex items-center text-sm font-medium pt-2">
                {item.name}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Navbar;
