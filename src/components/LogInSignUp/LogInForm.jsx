import { useState } from 'react'
import { Text,Input,InputGroup,InputRightAddon,Button } from '@chakra-ui/react'
import closeEye from '../../assets/close-eye.png'
import openEye from '../../assets/eye.png'
import email from '../../assets/email.png'
const LogInForm = () => {
    const [showPassword,setShowPassword]=useState(false)
  return (
    <div className='rounded-xl bg-white shadow-xl p-10 justify-center flex flex-col space-y-8'>
        <div><h1 className='font-semibold text-xl m-5 text-gray-700'>Log In To Your Account</h1></div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter College Email ID<span className='text-red-500'>*</span></Text>
            <InputGroup>
                <Input
                    placeholder='eg. abc@pgdav.du.ac.in'
                    
                />
                <InputRightAddon>
                    <img src={email} alt="mail logo" width={25} height={25} />
                </InputRightAddon>
            </InputGroup>
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Password<span className='text-red-500'>*</span></Text>
            <InputGroup>
                <Input
                    placeholder='eg. Text@123'
                    type={showPassword?'text':'password'}
                />
                <InputRightAddon onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer'>
                    <img src={showPassword?closeEye:openEye} alt="password logo" width={25} height={25} />
                </InputRightAddon>
            </InputGroup>
        </div>
        
            <Button colorScheme='black' className='bg-black'>Log In</Button>
       
    </div>
  )
}

export default LogInForm