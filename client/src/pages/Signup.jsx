import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        ></input>
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        ></input>
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-75">
          SIGN UP
        </button>
        <button className="bg-red-500 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-75">
          GOOGlE
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-up'}>
        <span className="text-blue-700">sign in</span>
        </Link>
      </div>
    </div>
  );
}
