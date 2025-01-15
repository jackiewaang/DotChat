import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Log In</h1>
            <form action="/login" method="POST" className="flex flex-col gap-4">
                <input className="w-full p-3 border rounded-lg border-gray-300" type="text" placeholder="Email" name="email" />
                <input className="w-full p-3 border rounded-lg border-gray-300" type="password" placeholder="Password" name="password" />
                <Link to="/forgot" className="text-sm text-green-500 hover:text-green-700 text-right">Forgot Password?</Link>
                <button type="submit" className="w-full p-3 bg-green-500 hover:bg-green-600 rounded-lg">Log In</button>
                <p className="text-center text-sm">
                    Don&#39;t have an account?
                    <Link to="/signup" className="text-green-500 hover:text-green-700"> Sign Up</Link>
                </p>
            </form>
        </div>
    </div>
    
  )
}

export default Login
