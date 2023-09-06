import { useState } from "react"
import Sidebar from "../components/ProfileEdit/Sidebar"
import PersonalDetails from '../components/ProfileEdit/PersonalDetails'
import Course from "../components/ProfileEdit/Course"
import Interests from "../components/ProfileEdit/Interests"
import Password from "../components/ProfileEdit/Password"
const Profile = () => {
    const [step,setStep]=useState(0)
  return (
    <div className="flex space-x-10">
        <Sidebar step={step} setStep={setStep}/>
        <div className="w-full h-full flex justify-center items-center">
            {step==0 && <PersonalDetails/>}
            {step==1 && <Course/>}
            {step==2 && <Interests/>}
            {step==3 && <Password/>}
            {step==4 && <PersonalDetails/>}
            {step==5 && <PersonalDetails/>}
        </div>
      


    </div>
  )
}

export default Profile