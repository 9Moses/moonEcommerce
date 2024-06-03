import { useEffect, useRef, useState } from "react";
import { logo } from "../../assets/common";
import { menulists } from "../../assets/data/data";
import { CustomLinks, CustomNavLinks } from "./Components";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModelCard } from "./cart/ModelCard";

//
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //close menu if click outside of  close menu button
  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  //handle scroll with animation
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isHomePage = location.pathname === "/";

  return (
    <>
      <div
        className={
          isHomePage
            ? `header px-12  bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            }  lg:h-[60px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}

        <nav className="p-4 flex justify-between items-center relative">
          <div className=" flex items-center gap-14">
            <div>
              <img src={logo} alt="Logo" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((menu) => (
                <ul key={menu.id} className="uppercase list-none text-[14px]">
                  <li>
                    <CustomNavLinks href={menu.path}>
                      {menu.link}
                    </CustomNavLinks>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLinks
                className={`${
                  isScrolled || !isHomePage ? "text-black" : " text-white"
                }`}
              >
                Login
              </CustomLinks>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                |
              </span>
              <CustomLinks
                className={`${
                  isScrolled || !isHomePage ? "text-black" : " text-white"
                }`}
              >
                Sign Up
              </CustomLinks>
            </div>
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-black" : " text-primary"
              }`}
            >
              <IoIosSearch size={23} />

              <ModelCard />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div
          ref={menuRef}
          className={`lg:flex lg:items-center lg:w-auto w-3/5 mx-10 p-5 absolute right-0 top-full  menu-container ${
            isOpen ? "open" : "closed"
          }`}
        >
          {menulists.map((menu) => (
            <ul key={menu.id} className="uppercase list-none text-[14px]">
              <li>
                <CustomNavLinks href={menu.path} className="text-white">
                  {menu.link}
                </CustomNavLinks>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
