
const Sidebar = ({setStep}) => {
  return (
    <div className="shadow-lg w-1/4 pt-10 pb-10 space-y-5 flex flex-col justify-center items-center bg-slate-200 rounded-tr-xl rounded-br-xl">
        <div onClick={()=>setStep(0)} className="cursor-pointer">Personal Details</div>
        <div onClick={()=>setStep(1)} className="cursor-pointer">Course</div>
        <div onClick={()=>setStep(2)} className="cursor-pointer">Interests</div>
        <div onClick={()=>setStep(3)} className="cursor-pointer">Change Password</div>
        <hr className=" border-gray-500 border-dotted w-1/3"/>
        <div onClick={()=>setStep(4)} className="cursor-pointer">Need Some Help?</div>
        <div onClick={()=>setStep(5)} className="cursor-pointer">Contact Us</div>
    </div>
  )
}

export default Sidebar