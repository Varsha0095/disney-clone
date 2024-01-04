import { useState } from 'react'
// import logo from './../assets/images/logo.png';
import disneyLogo from './../assets/images/disneyLogo.png';
import { 
    HiHome,HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv
 } from "react-icons/hi2";
 import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';



function Header() {
    const[toggle, setToggle] = useState(false);
    const menu = [
        {
            name:"HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        }
        ,
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORIGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },
        {
            name:"SERIES",
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
      <img src={disneyLogo} className='w-[90px] md:w-[135px] object-cover' />
      <div className='hidden md:flex gap-8'>
      {menu.map((item) => (
        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
      ))}
      </div>
      {/* responsive menu */}
      <div className='flex md:hidden gap-5'>
      {menu.map((item,index) => index<3 && (
        <HeaderItem key={index} name={''} Icon={item.icon} />
      ))}
      </div>
      <div className='md:hidden' onClick={() => setToggle(!toggle)} >
        <HeaderItem name={''} Icon={HiDotsVertical} />
        {toggle ? <div className='absolute mt-3 bg-slate-50 border-[1px] p-3 px-5 py-4'>
        {menu.map((item,index) => index>2 && (
        <HeaderItem key={index} name={item.name} Icon={item.icon} />
      ))}
        </div> : null }
      </div>
      </div>
      <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
      className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
