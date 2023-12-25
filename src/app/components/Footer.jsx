import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between">
        <span>
          <Image 
            src="/images/logo.png"
            alt="Logo"
            width={75}
            height={75}
          />
        </span>
        <p className="text-slate-600 flex items-center">
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer