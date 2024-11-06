import { Link } from "react-router-dom";

const AuthLayout=(props)=> {
    const {children,title,type}=props;
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-green-500'>{title}</h1>
                <p className='font-medium text-slate-500'>
                    Welcome, Please enter your details
                </p>
                {children}
                <Navigation type={type}/>
                {/* <p className="text-sm mt-5 text-center">
                    {type==='login'? "Don`t Have an Account? ":"Already have an account? "}
                     
                    {type==='login' &&
                        <Link to="/register" className="font-bold text-blue-600">
                            Sign Up
                        </Link>
                    }
                    {type==='register' &&
                        <Link to="/login" className="font-bold text-blue-600">
                            Sign In
                        </Link>
                    }
                </p> */}
            </div>
        </div>
    )
}

const Navigation=({type})=>{
    if (type==='login') {
        return (
            <p className="text-sm mt-5 text-center">
                Don`t Have an Account?
                 <Link to="/register" className="font-bold text-blue-600">
                    Sign Up
                </Link>
            </p>
        ) 
    } else {
        return (
            <p className="text-sm mt-5 text-center">
                Already Have an Account?
                 <Link to="/login" className="font-bold text-blue-600">
                    Sign In
                </Link>
            </p>
        ) 
    }
}

export default AuthLayout;