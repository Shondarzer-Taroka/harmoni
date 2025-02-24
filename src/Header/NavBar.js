
// // src/Header/NavBar.js

import { Search, ShoppingCart, User } from "lucide-react";
import SearchInput from "../Search/SearchInput";

export default function Navbar() {

    return (
        <nav className="bg-yellow-400 p-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-black font-bold text-xl">Harmoni</div>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-black font-medium">
                <li className="cursor-pointer">Home Page</li>
                <li className="cursor-pointer">Categories</li>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">More Options ▼</li>
            </ul>

            {/* Search Bar */}

            <SearchInput/>
            {/* Icons */}
            <div className="flex items-center space-x-4">
                <div className="relative cursor-pointer">
                    <ShoppingCart size={24} className="text-black" />
                    <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1">1</span>
                </div>
                <User size={24} className="text-white cursor-pointer bg-black rounded-full p-1" />

            </div>
        </nav>
    );
}
