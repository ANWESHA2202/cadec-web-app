
const SignupProgress = ({step,lastCompletedStep}) => {
  return (
    <div className="flex space-x-4 justify-evenly mb-5">
        <div className={`p-3 pt-1 pb-1 ${step==1?'bg-blue-500 text-white':'bg-blue-50'} border-2  rounded-full`}>1</div>
        <div className={`p-3 pt-1 pb-1 ${step==2?'bg-blue-500 text-white':'bg-blue-50'} border-2  rounded-full`}>2</div>
        <div className={`p-3 pt-1 pb-1 ${step==3?'bg-blue-500 text-white':'bg-blue-50'} border-2  rounded-full`}>3</div>
    </div>
  )
}

export default SignupProgress