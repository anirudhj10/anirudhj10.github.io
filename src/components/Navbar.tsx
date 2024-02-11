'use client';
import { Menu, User, X } from 'lucide-react';
import { FC } from 'react';
import SearchBar from './navbar/SearchBar';
import Button from './ui/Button';
import { useContact, useMenu } from './Provider';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { setFormVisibility } = useContact();
    const { showMenu, showMenuVisibility } = useMenu();

};

export default Navbar;
