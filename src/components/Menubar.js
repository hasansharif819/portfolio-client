import React, { useState, useEffect, useRef } from 'react';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Handle clicks outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    const menuItems = (
        <>
            <li><a href="#home" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#skills" onClick={handleMenuItemClick}>Skills</a></li>
            <li><a href="#project" onClick={handleMenuItemClick}>Project</a></li>
            <li><a href="#experience" onClick={handleMenuItemClick}>Experience</a></li>
            <li><a href="#blogs" onClick={handleMenuItemClick}>Blogs</a></li>
            <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
            <li><a href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
        </>
    );

    return (
        <div className='shadow-lg sticky top-0 z-50 bg-accent text-white'>
            <div className="container responsive-navbar mx-auto flex justify-between items-center p-4">
            <a href="#home" onClick={handleMenuItemClick}>
                <h1 className="text-2xl font-bold">Sharif Hasan</h1>
            </a>
                
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                
                <nav className="hidden lg:flex flex-grow justify-end">
                    <ul className="flex space-x-6">
                        {menuItems}
                    </ul>
                </nav>
            </div>
            
            {/* Mobile Menu */}
            <div ref={menuRef} className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="bg-white text-gray-800 w-3/4 max-w-sm h-[100%] p-4 relative">
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="space-y-4 mt-8">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;

