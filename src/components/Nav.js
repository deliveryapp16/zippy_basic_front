"use client";

import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Button from "@/components/Button";

const Nav = () => {
  const navList = ["Características", "Precios", "Testimonios", "FAQ"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex items-center bg-mintGreen fixed top-0 z-10 px-6 md:px-16">
      <div className="flex items-center gap-2 cursor-pointer w-1/2 md:w-1/3">
        <img
          src="/images/Zippy-Logo-1.png"
          alt="Logo Zippy"
          className="w-10 object-cover"
        />
        <h1 className="text-2xl font-semibold text-carbonGray">ZIPY</h1>
      </div>
      <ul className="hidden md:flex flex-row gap-10 justify-center w-1/3">
        {navList.map((item, index) => (
          <li
            key={index}
            className="font-semibold text-carbonGray cursor-pointer hover:text-emeraldGreen transition"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="hidden md:flex flex-row items-center justify-end gap-6 w-1/3">
        <Button
          backgroundColor="bg-white"
          width="w-40"
          onClick={() => console.log("Iniciar Sesión")}
        >
          Iniciar Sesión
        </Button>
        <Button width="w-40" onClick={() => console.log("Crear Cuenta")}>
          Crear Cuenta
        </Button>
      </div>
      <div className="md:hidden flex justify-end w-1/2">
        {menuOpen ? (
          <XIcon
            size={36}
            weight="bold"
            className="cursor-pointer text-carbonGray"
            color="currentColor"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <ListIcon
            size={36}
            weight="bold"
            className="cursor-pointer text-carbonGray"
            color="currentColor"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full h-screen bg-mintGreen flex flex-col items-center gap-8 py-6 md:hidden">
          {navList.map((item, index) => (
            <p
              key={index}
              className="font-semibold text-carbonGray cursor-pointer hover:text-emeraldGreen transition"
            >
              {item}
            </p>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Button
              backgroundColor="bg-white"
              width="w-60"
              onClick={() => console.log("Iniciar Sesión")}
            >
              Iniciar Sesión
            </Button>
            <Button width="w-60" onClick={() => console.log("Crear Cuenta")}>
              Crear Cuenta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
