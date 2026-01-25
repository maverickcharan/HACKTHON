import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";
import { useShopContext } from "../context/shopcontext";

const Navbar = () => {

    const { token, setToken } = useShopContext();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        setToken("");
        navigate("/");
        setOpen(false);
    };

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">

                {/* Top Bar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">MoodMitra</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">

                        <Link to="/features" className="text-sm font-medium text-white/80 hover:text-white">
                            Features
                        </Link>

                        <Link to="/about" className="text-sm font-medium text-white/80 hover:text-white">
                            About
                        </Link>

                        {token ? (
                            <button
                                onClick={handleLogout}
                                className="text-sm font-medium text-red-400 hover:text-red-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" className="text-sm font-medium text-white/80 hover:text-white">
                                Login
                            </Link>
                        )}

                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>

                </div>

                {/* Mobile Dropdown */}
                {open && (
                    <div className="md:hidden mt-4 space-y-3 border-t border-white/10 pt-4">

                        <Link onClick={() => setOpen(false)} to="/features" className="block text-white/80 hover:text-white">
                            Features
                        </Link>

                        <Link onClick={() => setOpen(false)} to="/about" className="block text-white/80 hover:text-white">
                            About
                        </Link>

                        {token ? (
                            <button
                                onClick={handleLogout}
                                className="block text-left text-red-400 hover:text-red-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                onClick={() => setOpen(false)}
                                to="/login"
                                className="block text-white/80 hover:text-white"
                            >
                                Login
                            </Link>
                        )}

                    </div>
                )}

            </div>
        </header>
    );
};

export default Navbar;
