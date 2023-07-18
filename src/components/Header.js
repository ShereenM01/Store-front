import React, {useContext} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
  <header className='bg-purple-200'>
    <section>Header</section>
    <section 
    onClick={()=> setIsOpen(!isOpen)}
    className='cursor-pointer flex relative'
    >
    <BsBag className='text-2x1'/>
    </section>
    </header>
    );
};

export default Header;
