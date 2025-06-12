import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/");
  }

  const changeRegister = () => {
    navigate("/register");
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username kiriting";
    if (!password.trim()) newErrors.password = "Password kiriting";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/auth",
      user
    );

    localStorage.setItem("token", res.data.token);

    if (res.data.token) {
      navigate("/");
    } else {
      alert("Login failed");
    }

    setUserName("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="bg-gray-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl flex shadow-lg container mx-auto">
        <div className="w-1/2 bg-gray-900 flex flex-col items-center justify-center text-white py-12 rounded-l-lg">
          <a href="#">
            <FaBlog className="text-blue-600 text-9xl" />
          </a>
          <p className="text-xl my-10">Welcome back to</p>
          <h2 className="text-7xl">Shopping List</h2>
        </div>

        <div className="w-1/2 flex flex-col py-10">
          <h2 className="w-full text-center text-4xl text-blue-600 font-medium">
            Sign In
          </h2>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 px-10 my-4">
            <label htmlFor="username">Username</label>
            <div>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (errors.username && e.target.value.trim()) {
                    setErrors((prev) => ({ ...prev, username: null }));
                  }
                }}
                className="border p-2 w-full rounded-lg ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password && e.target.value.trim()) {
                    setErrors((prev) => ({ ...prev, password: null }));
                  }
                }}
                className="border p-2 w-full rounded-lg ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="sumbit"
              className="w-full bg-blue-600 cursor-pointer rounded-2xl text-white text-lg py-1"
            >
              Sign In
            </button>
          </form>

          <p className="ml-10">
            No account yet?{" "}
            <button
              onClick={changeRegister}
              className="cursor-pointer underline text-blue-600"
            >
              Create One
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
