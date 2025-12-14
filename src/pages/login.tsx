import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/lib/utils/api";
import Tap from "@/components/common/tap";

const Login = () => {
  const [activeTab, setActiveTab] = useState<"login" | "create">("login");

  const schema = z.object({
    email: z
      .email({ message: "Please enter a valid email." })
      .regex(/^[a-zA-Z_0-9]{3,25}@(gmail|yahoo)\.com$/, {
        message: "Please enter a valid emaail.",
      }),
    password: z.string().regex(/^[a-zA-Z_0-9@$#%!&*]{6,20}$/, {
      message: "Please enter a valid paassword.",
    }),
    firstName: z
      .string()
      .regex(/^[a-zA-Z_0-9]{1,20}$/, { message: "Please enter a first name." }),
    lastName: z
      .string()
      .regex(/^[a-zA-Z_0-9]{1,20}$/, { message: "Please enter a last name." }),
    PhoneNumber: z.string().regex(/^(\+2)?01[0125][0-9]{8}$/, {
      message: "Please enter phone number like 01(0,1,2,5)XXXXXXXX.",
    }),
    region: z.string().min(1, { message: "Please select a region." }),
    agreeToTerms: z.boolean().refine((value) => value === true, {
      message: "Please agree to the terms and conditions.",
    }),
  });

  type LoginForm = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      PhoneNumber: "",
      region: "",
      agreeToTerms: false,
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    api.post("auth/sign-in", data).then((res) => {
      console.log(res.data);
      toast.success("Login successful!");
    });
    
  };

  return (
    <>
      <Tap />
      <div className="flex min-h-[calc(100vh-64px)] bg-white dark:bg-gray-900">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center p-12 dark:from-gray-600 dark:to-gray-900">
          <div className="text-center max-w-md">
            <h2 className="text-4xl font-bold text-Yprimary mb-4">
              Register Now And
            </h2>
            <h3 className="text-4xl font-bold text-black mb-6">
              Enjoy Shopping Smarter
            </h3>
            <p className="text-lg text-black mb-8">
              Share More, Save More! Get Discounts and Surprises When You Share.
            </p>
            <div className="relative h-96 flex items-center justify-center">
              <img
                src="../../../assets/images/GoldPhone.png"
                alt="Gold Phone"
                className="h-80  drop-shadow-2xl rounded-2xl"
              />
              <div className="absolute top-12 left-0 bg-Yprimary text-black px-4 py-2 rounded-lg font-bold text-sm">
                PURE GOLD
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                Hello, Creative Mind!"
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("login")}
                className={`pb-3 text-sm font-semibold transition-colors ${
                  activeTab === "login"
                    ? "text-Yprimary border-b-2 border-Yprimary"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("create")}
                className={`pb-3 text-sm font-semibold transition-colors ${
                  activeTab === "create"
                    ? "text-Yprimary border-b-2 border-Yprimary"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {activeTab === "login" ? (
                <>
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email or Username"
                      className="input"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* PasswordInput */}
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* ForgotPassword */}
                  <div className="text-right">
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-Yprimary"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* LoginButton */}
                  <button
                    type="submit"
                    className="w-full bg-Yprimary text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  {/* FirstName & LastName */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email or Username"
                      className="input"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input"
                      {...register("PhoneNumber", {
                        required: "Phone is required",
                      })}
                    />
                    {errors.PhoneNumber && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.PhoneNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="text-lg text-red-500 font-bold mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Region Select */}
                  <div>
                    <select className="input" {...register("region")}>
                      <option value="">Select your region</option>
                      <option value="north">Egypt</option>
                      <option value="south">USA</option>
                      <option value="east">England</option>
                      <option value="west">Spain</option>
                      <option value="center">France</option>
                    </select>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border border-gray-300 dark:border-gray-600"
                      {...register("agreeToTerms", {
                        required: "You must accept terms",
                      })}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      I agree to the Terms of Service and Privacy Policy
                    </span>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-lg text-red-500 font-bold">
                      {errors.agreeToTerms.message}
                    </p>
                  )}

                  {/* Create Account Button */}
                  <button
                    type="submit"
                    className="w-full bg-Yprimary  text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Create Account
                  </button>
                </>
              )}
            </form>

            {/* line */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Or
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 ">
              <button className="flex-1 flex items-center bg-gradient-to-r from-red-500 to-yellow-400 justify-center gap-2 border border-gray-300 dark:border-gray-600 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <FcGoogle />
                <span className="text-sm font-medium  text-gray-700 dark:text-gray-300">
                  Google
                </span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <BsFacebook />
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
