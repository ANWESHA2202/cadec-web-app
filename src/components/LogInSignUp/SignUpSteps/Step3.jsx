import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input"
import { Button } from "@chakra-ui/react";

const Step3 = ({prevStep}) => {
  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
        
      <h1 className='text-xl font-bold text-blue-900'>Verify Your Account Before Login</h1>
            
      <div className="text-gray-500">We have sent you an email to verify your account.<br/> Kindly check the email to access your account.</div>
        
        
      <div className="flex sm:flex-row flex-col justify-between w-full">
      <Button  onClick={prevStep}>Go Back</Button>

      {/* <Button colorScheme='black' className="bg-black" onClick={handleSignup}>Submit</Button> */}

      </div>


    </div>
  )
}

export default Step3