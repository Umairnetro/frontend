import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-col gap-4 bg-white px-4 py-6 w-[30%] rounded-lg">
        <h2 className="text-3xl text-[#3d6969] upper text-center font-medium mb-2">
          Login
        </h2>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-full px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col">
          <input
            className="bg-gray-200 border-2 border-gray-300 rounded-full px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-[#2c4646] text-white px-5 py-2 rounded-full border-2 border-[#2c4646] hover:bg-transparent hover:text-[#2c4646] duration-300 self-center outline-none"
        >
          Login
        </button>
      </div>
      <p className="mt-2">
        Don't have an account?&nbsp;
        <Link
          to="/signup"
          className="hover:text-gray-400 underline"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Login;
