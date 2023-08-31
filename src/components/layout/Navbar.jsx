import favicon from '../../assets/favicon.png'
import profile from '../../assets/profile.png'
import dots from '../../assets/dots.gif'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div className="m-10 mt-2 flex flex-col space-y-5 select-none">
        <div className="text-gray-500">
            Selected Course: <span className="font-semibold italic text-blue-900">Commerce</span>
        </div>
        <div className="flex justify-between">
            <div className="flex space-x-2">
                <div className="border-2 rounded-full bg-slate-100">
                    <img src={favicon} alt="logo" width={50} height={50}/>
                </div>
                <div className="">
                    <div className="italic text-gray-600 font-bold text-xl" style={{fontFamily:'cursive'}}>Hi,</div>
                    <div className="">Student Name</div>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-5">
                <div className="border-2 rounded-full bg-slate-100 cursor-pointer">
                    <img src={profile} width={50} height={50} alt="" />
                </div>
                <div className="cursor-pointer">
                    <Menu>
                        <MenuButton>
                            <img src={dots} width={30} alt="" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>About Us</MenuItem>
                            <MenuItem>Grievence Portal</MenuItem>
                            
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar