import { useState } from "react";
import Step1 from "./SignUpSteps/Step1";
import Step2 from "./SignUpSteps/Step2";
import Step3 from "./SignUpSteps/Step3";
import SignupProgress from "../layout/SignupProgress";
const SignUpForm = () => {
    const [step,setStep]=useState(1);
    const [entries,setEntries]=useState({
        name:'',
        email:'',
        password:'',
        course:0,
        mobile:'',
        passyear:'',
        dsc:'',
        dse:'',
        ge:'',
        vac:'',
        aecc:'',
        sec:''

    })



    const handleChange=(e)=>{
        setEntries(prevEntries=>({...prevEntries,[e.target.name]:e.target.value}))
    }

    const handleSelectChange=(e,field)=>{
    if(Array.isArray(e)){
        setEntries(prevEntries=>({...prevEntries,[field]:e.map(item=>item.value)}))
    }else{
        setEntries(prevEntries=>({...prevEntries,[field]:e.value}))
    }
    }

    const nextStep=()=>{
        if(step<=3){
            // console.log(entries)
            setStep(prevStep=>prevStep+1)
            // setLastCompletedStep(prevStep=>prevStep+1)
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
                <div className="bg-white rounded-xl p-10">
                    <SignupProgress step={step}/>
                    <Step1
                        handleChange={handleChange}
                        handleSelectChange={handleSelectChange}
                        nextStep={nextStep}
                        entries={entries}
                    />
                </div>
            )
        }
        case 2:{
            return(
                <div className="bg-white rounded-xl p-10">
                    <SignupProgress step={step} />
                    <Step2
                        handleChange={handleChange}
                        handleSelectChange={handleSelectChange}
                        prevStep={prevStep}
                        nextStep={nextStep}
                        entries={entries}
                    />
                </div>

            )
        }
        case 3:{
            return(
                <div className="bg-white rounded-xl p-10">
                    <SignupProgress step={step}/>
                    <Step3
                        prevStep={prevStep}
                    />
                </div>
            )
        }
        default:
            break;
    }
}

export default SignUpForm