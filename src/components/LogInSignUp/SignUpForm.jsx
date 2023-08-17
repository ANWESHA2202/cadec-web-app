import { useState } from "react"
import Step1 from "./SignUpSteps/Step1";
import Step2 from "./SignUpSteps/Step2";
import Step3 from "./SignUpSteps/Step3";
import SignupProgress from "../layout/SignupProgress";
const SignUpForm = () => {
    const [step,setStep]=useState(1);
    const [lastCompletedStep,setLastCompletedStep]=useState(0);
    const [entries,setEntries]=useState({
        name:'',
        email_id:'',
        password:'',
        interests:[],
        stream:''
    })

    const nextStep=()=>{
        if(step<3){
            setStep(prevStep=>prevStep+1)
        }
    }

    const prevStep=()=>{
        if(step>1){
            setStep(prevStep=>prevStep-1)
        }
    }
    switch(step){
        case 1:{
            return(
                <div className="bg-white rounded-xl p-10 ">
                    <SignupProgress step={step} lastCompletedStep={lastCompletedStep}/>
                    <Step1
                        setEntries={setEntries}
                        nextStep={nextStep}
                    />
                </div>
            )
        }
        case 2:{
            return(
                <Step2
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            )
        }
        case 3:{
            return(
                <Step3
                    prevStep={prevStep}
                />
            )
        }
        default:
            break;
    }
}

export default SignUpForm