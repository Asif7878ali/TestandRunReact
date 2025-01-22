import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
   
  const clickShowPassword = () => {
    setPasswordShown(!passwordShown)
  }

 async function handleSubmit(e) {

    e.preventDefault();
      const form = {
          email : email,
          password : password
      }
       console.log('Frountend data',form)
       try {
        const register = "http://localhost:7000/login";
        const response = await axios.post(register, form);
        console.log(response.data);
        // destucter token
        const { token} = response.data;  
        // set to session storage
        sessionStorage.setItem('token',token)
        navigate("/welcome");
        
      } catch (error) {
        console.warn(error);
      }
     
       setEmail('')
       setPassword('')
  }


  return (
    <>
      <section className="bg-white-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-100">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Log in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action=""
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div>
                  <label htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black">
                    Your E-mail
                  </label>
                  <input type="email" name="email" id="email" autoComplete=""
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600  block w-full p-2.5"
                    placeholder="name@gmail.com" required
                    value={email} onChange={(e)=> setEmail(e.target.value) }/>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                    Password
                  </label>
                  <div className="relative">
                    <input name="password" id="password" placeholder="••••••••"
                       type={passwordShown ? 'text' : 'password'}
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg   block w-full p-2.5" required value={password}
                      onChange={(e)=> setPassword(e.target.value) } />
                  </div>

                  <button onClick={clickShowPassword}><input type="checkbox" name="checkbox"/></button>
                 <label htmlFor="checkbox">Show Password</label>
                </div>
              
                {/* Button */}
                <button type="submit" onClick={handleSubmit}
                  className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"> Log in </button>
              </form>
              <p className="text-sm font-light">
                                Do not an account?
                                <Link to="/registration">
                                <p className=" text-primary-600 hover:underline dark:text-primary-500 font-bold text-2xl cursor-pointer text-blue-600">Register here</p>
                                </Link>
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
