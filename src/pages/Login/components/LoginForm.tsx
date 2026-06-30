import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ForgotPasswordModal from "./ForgotPasswordModal";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-1 py-1">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("login.form.email")}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FiMail size={18} />
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder={t("login.form.emailPlaceholder")}
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("login.form.password")}
            </label>
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(true)}
              className="text-xs font-bold text-Yprimary hover:text-black dark:hover:text-white transition-colors"
            >
              {t("login.form.forgotPassword")}
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FiLock size={18} />
            </div>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder={t("login.form.passwordPlaceholder")}
              className={`w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.password ? "border-red-500" : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            {...register("rememberMe")}
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 text-Yprimary border-gray-300 rounded focus:ring-Yprimary accent-Yprimary"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
            {t("login.form.rememberMe")}
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-Yprimary text-black font-bold py-3.5 rounded-xl hover:bg-black hover:text-Yprimary transition-all duration-300 shadow-lg shadow-Yprimary/20 active:scale-[0.98]"
        >
          {t("login.form.login")}
        </button>
      </form>

      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />
    </>
  );
};

export default LoginForm;
