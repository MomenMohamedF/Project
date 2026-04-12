import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/utils/api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const registerSchema = z
  .object({
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
    firstName: z.string().min(1, { message: "Please enter a first name." }),
    lastName: z.string().min(1, { message: "Please enter a last name." }),
    userName: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." }),
    phoneNumber: z.string().regex(/^(\+2)?01[0125][0-9]{8}$/, {
      message: "Please enter phone number like 01(0,1,2,5)XXXXXXXX.",
    }),
    region: z.string().min(1, { message: "Please select a region." }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password." }),
    agreeToTerms: z.boolean().refine((value) => value === true, {
      message: "Please agree to the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<{ long: number; lat: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            long: position.coords.longitude,
            lat: position.coords.latitude,
          });
          setLocationError(null);
          toast.success("Location retrieved successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError("Failed to get location. Please allow location access.");
          toast.error("Failed to get location.");
        },
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
      toast.error("Geolocation not supported.");
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: RegisterFormData) => {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userName: formData.userName,
        phoneNumber: formData.phoneNumber,
        region: formData.region,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        location: location
          ? { lat: location.lat, long: location.long }
          : null,
      };
      return api.post("auth/sign-up", payload);
    },
    onSuccess: (data) => {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      toast.success(data.data.message || "Account created!");
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
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      region: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (formData) => {
    if (!location) {
      toast.error("Please get your location before creating an account.");
      return;
    }
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* FirstName & LastName */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="input-name w-full"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-lg text-red-500 font-bold mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="input-name w-full"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-lg text-red-500 font-bold mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

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

      {/* Username Input */}
      <div>
        <input
          type="text"
          placeholder="Username"
          className="input"
          {...register("userName")}
        />
        {errors.userName && (
          <p className="text-lg text-red-500 font-bold mt-1">
            {errors.userName.message}
          </p>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          className="input"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <p className="text-lg text-red-500 font-bold mt-1">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {/* Password Input */}
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

      {/* Confirm Password Input */}
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-lg text-red-500 font-bold mt-1">
            {errors.confirmPassword.message}
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
        {errors.region && (
          <p className="text-lg text-red-500 font-bold mt-1">
            {errors.region.message}
          </p>
        )}
      </div>

      {/* Location Inputs */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="number"
            placeholder="Latitude"
            className="input"
            value={location?.lat || ""}
            onChange={(e) =>
              setLocation((prev) => ({
                long: prev?.long || 0,
                lat: parseFloat(e.target.value) || 0,
              }))
            }
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Longitude"
            className="input"
            value={location?.long || ""}
            onChange={(e) =>
              setLocation((prev) => ({
                lat: prev?.lat || 0,
                long: parseFloat(e.target.value) || 0,
              }))
            }
            required
          />
        </div>
      </div>

      {/* Location Button */}
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={handleGetLocation}
          className="w-full py-2 px-4 rounded-lg font-semibold border bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
        >
          Auto-detect Location
        </button>
        {locationError && (
          <p className="text-sm text-red-500">{locationError}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border border-gray-300 dark:border-gray-600"
          {...register("agreeToTerms")}
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
        disabled={isPending}
        type="submit"
        className="w-full bg-Yprimary text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
      >
        {isPending ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterForm;
