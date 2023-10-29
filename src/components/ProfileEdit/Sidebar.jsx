
const Sidebar = ({step,setStep}) => {
  return (
    <div className="shadow-lg w-1/4 pt-10 pb-10 space-y-5 flex flex-col justify-center items-center bg-slate-200 rounded-tr-xl rounded-br-xl h-1/4">
        <div onClick={()=>setStep(0)} className={`cursor-pointer ${step==0?'text-blue-800 italic':''}`}>Personal Details</div>
        <div onClick={()=>setStep(1)} className={`cursor-pointer ${step==1?'text-blue-800 italic':''}`}>Course</div>
        <div onClick={()=>setStep(2)} className={`cursor-pointer ${step==2?'text-blue-800 italic':''}`}>Subjects</div>
        <div onClick={()=>setStep(3)} className={`cursor-pointer ${step==3?'text-blue-800 italic':''}`}>Change Password</div>
        <hr className=" border-gray-500 border-dotted w-1/3"/>
        <div onClick={()=>setStep(4)} className={`cursor-pointer ${step==4?'text-blue-800 italic':''}`}>Need Some Help?</div>
        <div onClick={()=>setStep(5)} className={`cursor-pointer ${step==5?'text-blue-800 italic':''}`}>Contact Us</div>
    </div>
  )
}

export default Sidebar