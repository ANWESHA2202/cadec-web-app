import Logo from '../assets/logo.jpg'
import LogInForm from '../components/LogInSignUp/LogInForm'
const Login = () => {
  return (
    <div className='flex sm:flex-row flex-col'>
        <div className="h-screen w-[40%] flex justify-center items-center">
            <img src={Logo} alt="logo" />
        </div>
        <div className="w-[60%] h-screen bg-slate-100 flex justify-center items-center">
            <LogInForm/>
        </div>
    </div>
  )
}

export default Login