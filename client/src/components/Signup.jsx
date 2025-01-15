import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
        <form className="flex flex-col gap-4" action="/signup" method="POST">
          <input className="w-full p-3 border rounded-lg border-gray-300" type="text" placeholder="Username" name="username" />
          <input className="w-full p-3 border rounded-lg border-gray-300" type="text" placeholder="Email" name="email" />
          <input className="w-full p-3 border rounded-lg border-gray-300" type="password" placeholder="Password" name="password" />
          <input className="w-full p-3 border rounded-lg border-gray-300" type="password" placeholder="Confirm Password" name="confirm" />
          <button type="submit" className="w-full p-3 bg-green-500 hover:bg-green-600 rounded-lg">Sign Up</button>
          <p className="text-center text-sm">
              Already have an account?
              <Link to="/login" className="text-green-500 hover:text-green-700"> Log In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
