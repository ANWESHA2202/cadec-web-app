import { useState } from "react";
import OTPInput from "react-otp-input"
import { Button } from "@chakra-ui/react";

const Step3 = ({prevStep,nextStep}) => {
    const [otp, setOtp] = useState('');
  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
        <div className="">
            <h1 className='text-xl font-bold text-blue-900'>OTP to Verify Phone No.</h1>
            <h1 className="text-right underline text-blue-800 cursor-pointer" onClick={nextStep}>Skip</h1>
        </div>
        
        <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>--</span>}
            renderInput={(props) => <input {...props} style={{width:'30px', height:'30px'}} className="text-center focus:outline-none focus:border-green-400  border-2 border-blue-400 rounded-lg"/>}
        />
        <div className="flex sm:flex-row flex-col justify-between w-full">
        <Button  onClick={prevStep}>Go Back</Button>

        <Button colorScheme='black' className="bg-black" onClick={nextStep}>Submit</Button>

        </div>


    </div>
  )
}

export default Step3