import { Text,Button,Input,InputGroup,InputRightAddon } from "@chakra-ui/react"
import showpassword from '../../assets/close-eye.png';
import hidepassword from '../../assets/eye.png'
import { useState } from "react"
const Password = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [password,setPassword]=useState('');
    const [verify,setVerify]=useState(true);
    const verifyPassword=()=>{
        if(password=='1234'){
            setVerify(false);
        }
    }
  return (
    <div className='w-1/2 h-full flex flex-col space-y-5'>
        <div>
            <Text>Enter Your Current Password:</Text>
            <div className="flex justify-between gap-3">
                <InputGroup>
                    <Input
                        placeholder='eg. Text@123'
                        type={showPassword?'text':'password'}
                        onChange={(e)=>setPassword(e.target.value)}
                        readOnly={verify?false:true}
                    />
                    <InputRightAddon onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer'>
                        <img src={showPassword?hidepassword:showpassword} alt="password logo" width={25} height={25} />
                    </InputRightAddon>
                </InputGroup>
                <Button colorScheme={`${verify?'whatsapp':'blackAlpha'}`} className={`${!verify?'cursor-not-allowed':''}`} onClick={verifyPassword}>Verify</Button>
            </div>

        </div>
        {!verify&&<><div>
            <Text>Enter New Password:</Text>
            <InputGroup>
                    <Input
                        placeholder='eg. Text@123'
                        type={showPassword?'text':'password'}
                        onChange={(e)=>setPassword(e.target.value)}
                        readOnly={verify?false:true}
                    />
                    <InputRightAddon onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer'>
                        <img src={showPassword?hidepassword:showpassword} alt="password logo" width={25} height={25} />
                    </InputRightAddon>
                </InputGroup>
        </div>
        <div>
            <Text>Confirm New Password:</Text>
            <InputGroup>
                    <Input
                        placeholder='eg. Text@123'
                        type={showPassword?'text':'password'}
                        onChange={(e)=>setPassword(e.target.value)}
                        readOnly={verify?false:true}
                    />
                    <InputRightAddon onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer'>
                        <img src={showPassword?hidepassword:showpassword} alt="password logo" width={25} height={25} />
                    </InputRightAddon>
                </InputGroup>
        </div>
        <div className="text-right">
            <Button colorScheme='black' className='bg-black'>Update Password</Button>
        </div></>}
    </div>
  )
}

export default Password