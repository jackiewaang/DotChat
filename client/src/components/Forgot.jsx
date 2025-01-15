import { Link } from "react-router-dom"

const Forgot = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Forgot your Password?</h1>
            <form action="/forgot" method="POST" className="flex flex-col gap-4">
                <input className="w-full p-3 border rounded-lg border-gray-300" type="text" placeholder="Email" name="email" />
                <button type="submit" className="w-full p-3 bg-green-500 hover:bg-green-600 rounded-lg">Reset your password</button>
                <p className="text-center text-sm">
                <Link to="/login" className="text-gray-600 hover:text-gray-800">&lt; Back to Login</Link>    
                </p>
            </form>
        </div>
    </div>
    
  )
}

export default Forgot