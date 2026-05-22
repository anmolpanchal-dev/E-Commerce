import React, { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const { setShowSearch, getCartCount } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleSearchClick = () => {
    navigate("/collection")   // redirect
    setShowSearch(true)       // open search bar
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">

      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="" className="w-28 sm:w-36 cursor-pointer" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">

        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>

      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4 sm:gap-6">

        {/* Search */}
        <img
          onClick={handleSearchClick}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer hover:scale-110 transition"
        />

        {/* Profile */}
        <Link to='/login'>
          <img
            className="w-5 cursor-pointer hover:scale-110 transition"
            src={assets.profile_icon}
            alt=""
          />
        </Link>

        {/* Cart */}
        <NavLink to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 hover:scale-110 transition"
            alt=""
          />

          <p className="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </NavLink>

        {/* Mobile menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />

      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-20 overflow-hidden ${visible ? "w-[70%]" : "w-0"}`}>

        <div className="flex flex-col h-full">

          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 border-b cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} to="/" className="py-4 pl-6 border-b">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="py-4 pl-6 border-b">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="py-4 pl-6 border-b">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="py-4 pl-6 border-b">CONTACT</NavLink>

        </div>

      </div>
    </div>
  )
}

export default Navbar