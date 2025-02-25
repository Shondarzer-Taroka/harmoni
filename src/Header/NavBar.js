
// // // // src/Header/NavBar.js

// // import { Search, ShoppingCart, User } from "lucide-react";
// // import SearchInput from "../Search/SearchInput";

// // export default function Navbar() {

// //     return (
// //         <nav className="bg-yellow-400 p-4 flex items-center justify-between">
// //             {/* Logo */}
// //             <div className="text-black font-bold text-xl">Harmoni</div>

// //             {/* Navigation Links */}
// //             <ul className="flex space-x-6 text-black font-medium">
// //                 <li className="cursor-pointer">Home Page</li>
// //                 <li className="cursor-pointer">Categories</li>
// //                 <li className="cursor-pointer">Contact Us</li>
// //                 <li className="cursor-pointer">More Options ▼</li>
// //             </ul>

// //             {/* Search Bar */}

// //             <SearchInput/>
// //             {/* Icons */}
// //             <div className="flex items-center space-x-4">
// //                 <div className="relative cursor-pointer">
// //                     <ShoppingCart size={24} className="text-black" />
// //                     <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">1</span>
// //                 </div>
// //                 <User size={24} className="text-white cursor-pointer bg-black rounded-full p-1" />

// //             </div>
// //         </nav>
// //     );
// // }











// // import { ShoppingCart, User } from "lucide-react";
// // import SearchInput from "../Search/SearchInput";
// // import { useSelector } from "react-redux";

// // export default function Navbar() {
// //   const cartCount = useSelector((state) => state.cart.totalItems);

// //   return (
// //     <nav className="bg-yellow-400 p-4 flex items-center justify-between">
// //       <div className="text-black font-bold text-xl">Harmoni</div>

// //       <ul className="flex space-x-6 text-black font-medium">
// //         <li className="cursor-pointer">Home Page</li>
// //         <li className="cursor-pointer">Categories</li>
// //         <li className="cursor-pointer">Contact Us</li>
// //         <li className="cursor-pointer">More Options ▼</li>
// //       </ul>

// //       <SearchInput />

// //       <div className="flex items-center space-x-4">
// //         <div className="relative cursor-pointer">
// //           <ShoppingCart size={24} className="text-black" />
// //           <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">
// //             {cartCount}
// //           </span>
// //         </div>
// //         <User size={24} className="text-white cursor-pointer bg-black rounded-full p-1" />
// //       </div>
// //     </nav>
// //   );
// // }












// import { useState } from "react";
// import { ShoppingCart, User, Menu, X } from "lucide-react";
// import SearchInput from "../Search/SearchInput";
// import { useSelector } from "react-redux";

// export default function Navbar() {
//   const cartCount = useSelector((state) => state.cart.totalItems);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-yellow-400 p-4 flex items-center justify-between relative">
//       {/* Left side with Logo and Menu */}
//       <div className="flex items-center space-x-4">
//         {/* Menu Icon for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="block lg:hidden focus:outline-none"
//         >
//           {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
//         </button>

//         {/* Brand Name */}
//         <div className="text-black font-bold text-xl">Harmoni</div>
//       </div>

//       {/* Menu Items (Visible on Large Screens) */}
//       <ul className="hidden lg:flex space-x-6 text-black font-medium">
//         <li className="cursor-pointer">Home Page</li>
//         <li className="cursor-pointer">Categories</li>
//         <li className="cursor-pointer">Contact Us</li>
//         <li className="cursor-pointer">More Options ▼</li>
//       </ul>

//       {/* Right Section: Search, Cart, User */}
//       <div className="flex items-center space-x-4">
//         <SearchInput />
//         <div className="relative cursor-pointer">
//           <ShoppingCart size={24} className="text-black" />
//           <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">
//             {cartCount}
//           </span>
//         </div>
//         <User size={24} className="text-white cursor-pointer bg-black rounded-full p-1" />
//       </div>

//       {/* Mobile Menu (Visible when toggled) */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-yellow-500 shadow-md lg:hidden">
//           <ul className="flex flex-col space-y-3 p-4 text-black font-medium">
//             <li className="cursor-pointer">Home Page</li>
//             <li className="cursor-pointer">Categories</li>
//             <li className="cursor-pointer">Contact Us</li>
//             <li className="cursor-pointer">More Options ▼</li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }










import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import SearchInput from "../Search/SearchInput";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.totalItems);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 p-4 flex items-center justify-between relative">
      {/* Left: Logo & Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Menu Button (Only visible on mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>

        <div className="text-black font-bold text-xl hidden md:block">Harmoni</div>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden lg:flex space-x-6 text-black font-medium">
        <li className="cursor-pointer">Home Page</li>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">More Options ▼</li>
      </ul>

      {/* Right: Search, Cart, User */}
      <div className="flex items-center space-x-4">
        <SearchInput />
        <div className="relative cursor-pointer">
          <ShoppingCart size={24} className="text-black" />
          <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">
            {cartCount}
          </span>
        </div>
        <User size={24} className="text-white cursor-pointer bg-black rounded-full p-1" />
      </div>

      {/* Mobile Menu (Toggles when clicked) */}
      <div
        className={`absolute top-full left-0 z-40 w-full bg-yellow-500 shadow-md lg:hidden transform ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform duration-300`}
      >
        <ul className="flex flex-col space-y-3 p-4 text-black font-medium">
          <li className="cursor-pointer">Home Page</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">More Options ▼</li>
        </ul>
      </div>
    </nav>
  );
}
