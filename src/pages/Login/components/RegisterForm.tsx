import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiMapPin,
} from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const registerSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    latitude: z.string().min(1, "Latitude is required"),
    longitude: z.string().min(1, "Longitude is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setValue("latitude", position.coords.latitude.toString());
          setValue("longitude", position.coords.longitude.toString());
          toast.success("Location retrieved successfully!");
        },
        (error) => {
          toast.error("Error getting location: " + error.message);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 px-1 py-1 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("login.form.firstName")}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FiUser size={18} />
            </div>
            <input
              {...register("firstName")}
              placeholder={t("login.form.firstNamePlaceholder")}
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.firstName
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
            />
          </div>
          {errors.firstName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("login.form.lastName")}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FiUser size={18} />
            </div>
            <input
              {...register("lastName")}
              placeholder={t("login.form.lastNamePlaceholder")}
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.lastName
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
            />
          </div>
          {errors.lastName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
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
              errors.email
                ? "border-red-500"
                : "border-gray-200 dark:border-gray-700"
            } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("login.form.location")}
          </label>
          <button
            type="button"
            onClick={handleGetLocation}
            className="text-xs font-bold text-Yprimary flex items-center gap-1 hover:underline"
          >
            <FiMapPin size={12} />
            {t("login.form.getLocation")}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              {...register("latitude")}
              placeholder={t("login.form.latitude")}
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.latitude
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white text-xs`}
            />
          </div>
          <div className="relative">
            <input
              {...register("longitude")}
              placeholder={t("login.form.longitude")}
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                errors.longitude
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white text-xs`}
            />
          </div>
        </div>
        {(errors.latitude || errors.longitude) && (
          <p className="text-xs text-red-500 mt-1">Location is required</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t("login.form.password")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <FiLock size={18} />
          </div>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder={t("login.form.passwordPlaceholder")}
            className={`w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border ${
              errors.password
                ? "border-red-500"
                : "border-gray-200 dark:border-gray-700"
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

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t("login.form.confirmPassword")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <FiLock size={18} />
          </div>
          <input
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder={t("login.form.confirmPasswordPlaceholder")}
            className={`w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-gray-200 dark:border-gray-700"
            } rounded-xl focus:ring-2 focus:ring-Yprimary focus:border-transparent outline-none transition-all dark:text-white`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-Yprimary text-black font-bold py-3.5 rounded-xl hover:bg-black hover:text-Yprimary transition-all duration-300 shadow-lg shadow-Yprimary/20 active:scale-[0.98] mt-2"
      >
        {t("login.form.createAccount")}
      </button>
    </form>
  );
};

export default RegisterForm;

