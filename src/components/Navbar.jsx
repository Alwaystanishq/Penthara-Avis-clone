import React from "react";

function Navbar() {
  let navlist = [
    "Book",
    "Manage Booking",
    "Business Rentals",
    "Avis Preferred",
    "Deal",
  ];
  return (
    <nav className="flex justify-between align-middle w-full h-[8vh] px-20">
      <img className="h-[60px] mt-[9px]" src="/Logo.svg"/>
      <div>
        <ul className="flex gap-10 mt-[25px] font-bold">
          {navlist.map((key) => (
            <li className="hover:text-red-700">{key}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3 mt-[25px] font-bold ">
        <p className="text-xs m-1 mt-1 hover:text-red-700">EN</p>
        <p className="hover:text-red-700">Sign in or Join</p>
        <p>|||</p>
      </div>
    </nav>
  );
}

export default Navbar;
