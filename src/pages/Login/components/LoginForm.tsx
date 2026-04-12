import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/utils/api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ForgotPasswordModal from "./ForgotPasswordModal";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address (e.g. user@example.com).",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Password must contain uppercase, lowercase, number, and special character.",
      },
    ),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: LoginFormData) => {
      return api.post("auth/sign-in", formData);
    },
    onSuccess: (data) => {
      navigate("/");
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success("Login successful!");
    },
    onError: (error: any) => {
      let message = "An error occurred";
      if (error.response?.status === 404) {
        message = "Endpoint not found — check API URL";
      } else if (error.response?.status === 400) {
        message = error.response?.data?.message || "Invalid input";
      } else if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = (formData) => {
    mutate(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Email or Username"
            className="input"
            {...register("email")}
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
            {...register("password")}
          />
          {errors.password && (
            <p className="text-lg text-red-500 font-bold mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* ForgotPassword */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => setIsForgotPasswordOpen(true)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-Yprimary"
          >
            Forgot password?
          </button>
        </div>

        {/* LoginButton */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-Yprimary text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <ForgotPasswordModal onClose={() => setIsForgotPasswordOpen(false)} />
      )}
    </>
  );
};

export default LoginForm;
