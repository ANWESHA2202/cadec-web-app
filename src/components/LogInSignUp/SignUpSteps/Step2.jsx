import { useState } from "react";
import OTPInput from "react-otp-input"

const Step2 = () => {
    const [otp, setOtp] = useState('');
  return (
    <div>
        <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>--</span>}
            renderInput={(props) => <input {...props} style={{width:'30px', height:'30px'}} className="text-center border-2 border-blue-400 rounded-lg"/>}
        />
    </div>
  )
}

export default Step2