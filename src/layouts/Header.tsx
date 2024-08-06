import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { BurgerIcon } from '../assets/icons';
import { HEADER_NAV_ITEMS } from '../constants';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Container from './Container';
import { HeaderNavItem } from '../interfaces/layouts';
import ProgressIndicator from '../components/ProgressIndicator';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useOutsideClick(() => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="transparented fixed z-40 h-auto w-full bg-card shadow-md" ref={mobileNavRef}>
      <Container className="relative z-20 flex items-center justify-end py-5">
        <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-xl font-bold text-transparent md:text-3xl">
          VoloshynV
        </div>
        <nav className="hidden text-xl text-primary md:flex md:space-x-8 xl:space-x-12">
          {HEADER_NAV_ITEMS.map((navItem: HeaderNavItem, index: number) => (
            <a key={`NavItem ${index}`} href={navItem.href} className="hover:text-secondary">
              {navItem.title}
            </a>
          ))}
        </nav>
        <div className="w-auto md:hidden">
          <button
            className={twMerge('rotate-0 duration-200 focus:outline-none', isOpen && 'rotate-90')}
            onClick={toggleMenu}
          >
            <BurgerIcon className="stroke-primary" />
          </button>
        </div>
      </Container>
      <nav
        className={twMerge(
          'ease absolute -top-[10rem] z-10 flex w-full flex-col items-center space-y-3 bg-card pb-4 text-base font-normal text-primary shadow-md duration-300 md:hidden md:text-xl',
          isOpen && 'top-full',
        )}
      >
        {HEADER_NAV_ITEMS.map((navItem: HeaderNavItem, index: number) => (
          <a key={`MobileNavItem ${index}`} href={navItem.href} onClick={toggleMenu}>
            {navItem.title}
          </a>
        ))}
      </nav>
      <ProgressIndicator />
    </header>
  );
};

export default Header;
