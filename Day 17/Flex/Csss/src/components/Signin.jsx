import React from "react";
import { useForm } from "react-hook-form";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    alert("Login Successful!");
  };

  return (
    <div className="text-center flex justify-center align-middle">
      <div className="h-[600px] rounded-lg w-[500px] bg-gradient-to-t from-purple-400  to-gray-400 text-black">
        <h1 className="text-4xl text-center mt-10 "> NDLE Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-12">
            <label className="mr-6 text-xl">E-mail:</label>{" "}
            <input
              type="text"
              placeholder="Enter your Email"
              className="bg-white w-[250px] h-[40px] rounded-lg text-center"
              {...register("email", { required: true })}
            />
            <div className="text-black mt-3 ml-4 font-bold text-xl">
              {errors.email?.type === "required" && "Email is Required"}
            </div>
          </div>
          <br />
          <div>
            <label className="mr-3 text-xl">Password:</label>{" "}
            <input
              type="password"
              placeholder="Enter the Password"
              className="bg-white w-[250px] h-[40px] rounded-lg text-center"
              {...register("password", { required: true })}
            />
            <div className="text-black mt-4 ml-14 font-bold text-xl">
              {errors.password?.type === "required" && "Password is Required"}
            </div>
          </div>

          <br />
          <div className="flex ml-[70px]">
            <input type="checkbox" {...register("rememberMe")} />
            <label className="ml-1 text-xl">Remember me</label>
            <div className="ml-[30px]">
              <a className="ml-[50px] text-xl text-blue-500" href="#">
                Forget Password?
              </a>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="text-black text-xl bg-purple-600 w-[200px] h-[50px] rounded-lg ml"
          >
            Submit
          </button>
          <div className="flex mt-6 text-xl justify-center">
            <p>
              Don't have an account? <button>Sign up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
