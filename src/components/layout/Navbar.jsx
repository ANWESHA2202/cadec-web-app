import { useState,useEffect } from 'react'
import { Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import favicon from '../../assets/favicon.png'
import profile from '../../assets/profile.png'
import dots from '../../assets/dots.gif'
import { decodeToken } from 'react-jwt'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'


const Navbar = () => {
    const navigate=useNavigate();
    const [accessToken,setAccessToken]=useState('');

    useEffect(()=>{
        setAccessToken(localStorage.getItem('accessToken'));
    },[])
  return (
    <div className="m-10  w-[95%] mt-2 mb-5 flex flex-col space-y-5 select-none shadow-sm p-3">
        <div className="text-gray-500">
            Selected Course: <span className="font-semibold italic text-blue-900">{decodeToken(accessToken)?.course}</span>
        </div>
        <div className="flex justify-between">
            <div className="flex space-x-2">
                <div className="border-2 rounded-full bg-slate-100">
                    <Link href='/'>
                        <img src={favicon} alt="logo" width={50} height={50}/>
                    </Link>
                </div>
                <div className="">
                    <div className="italic text-gray-600 font-bold text-xl" style={{fontFamily:'cursive'}}>Hi,</div>
                    <div className="">{decodeToken(accessToken)?.name}</div>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-5">
                <div className="border-2 rounded-full bg-slate-100 cursor-pointer">
                    <Link href='/profile'>
                        <img src={profile} width={50} height={50} alt="" />
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Menu>
                        <MenuButton>
                            
                                <img src={dots} width={30} alt="" />
                           
                        </MenuButton>
                        <MenuList>
                            <MenuItem>About Us</MenuItem>
                            <MenuItem onClick={()=>navigate('/grievence')}>Grievence Portal</MenuItem>
                            <MenuItem onClick={()=>{
                                localStorage.removeItem('accessToken');
                                navigate('/login');
                            }}>Log Out</MenuItem>
                            
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar