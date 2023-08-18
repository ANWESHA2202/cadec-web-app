import { useState } from "react";
import OTPInput from "react-otp-input"
import { Button } from "@chakra-ui/react";

const Step2 = ({prevStep,nextStep}) => {
    const [otp, setOtp] = useState('');
  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
        <h1 className='text-xl font-bold text-blue-900'>Enter OTP to Verify Email</h1>
        
        <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>--</span>}
            renderInput={(props) => <input {...props} style={{width:'30px', height:'30px'}} className="text-center focus:outline-none focus:border-green-400  border-2 border-blue-400 rounded-lg"/>}
        />
        <div className="flex sm:flex-row flex-col justify-between w-full">
        <Button  onClick={prevStep}>Go Back</Button>

        <Button colorScheme='blue' onClick={nextStep}>Next</Button>

        </div>


    </div>
  )
}

export default Step2