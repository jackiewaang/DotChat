import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirm){
      setErrorMsg('Passwords do not match');
      return;
    }

    try{
      await axios.post('http://localhost:3000/api/auth/signup', {
        username,
        email,
        password,
      });

      setUsername('');
      setEmail('');
      setPassword('');
      setConfirm('');
      setErrorMsg('');

      navigate('/login');
    } catch(err){
      console.log(err);
      if(err.response && err.response.data){
        setErrorMsg(err.response.data.message);
      }
      console.error('Error creating user:', err);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="w-full p-3 border rounded-lg border-gray-300" 
            type="text" placeholder="Username" name="username" 
            value={username} onChange={(e) => setUsername(e.target.value)} 
          />
          <input className="w-full p-3 border rounded-lg border-gray-300" 
            type="text" placeholder="Email" name="email" 
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-full p-3 border rounded-lg border-gray-300" 
            type="password" placeholder="Password" name="password" 
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <input className="w-full p-3 border rounded-lg border-gray-300" 
            type="password" placeholder="Confirm Password" name="confirm" 
            value={confirm} onChange={(e) => setConfirm(e.target.value)}
          />

          {errorMsg && <p className="text-center text-red-500">{errorMsg}</p>}
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
