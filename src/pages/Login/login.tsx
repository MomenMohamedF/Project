import { useState, useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Tap from "@/components/common/tap";
import ErrorBoundry from "@/components/common/ErrorBoundry";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"login" | "create">("login");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Tap pageName={t("nav.login")} />
      <div className="flex min-h-[calc(100vh-64px)] bg-white dark:bg-gray-900">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center p-12 dark:from-gray-600 dark:to-gray-900">
          <div className="text-center max-w-md">
            <h2 className="text-4xl font-bold text-Yprimary mb-4">
              {t("login.title")}
            </h2>
            <h3 className="text-4xl font-bold text-black mb-6">
              {t("login.subtitle")}
            </h3>
            <p className="text-lg text-black mb-8">
              {t("login.tagline")}
            </p>
            <div className="relative h-96 flex items-center justify-center">
              <img
                src="../../../assets/images/GoldPhone.png"
                alt="Gold Phone"
                className="h-80  drop-shadow-2xl rounded-2xl"
              />
              <div className="absolute top-12 left-0 bg-Yprimary text-black px-4 py-2 rounded-lg font-bold text-sm">
                {t("login.pureGold")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
          <ErrorBoundry>
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                  {t("login.greeting")}
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
                  {t("login.loginTab")}
                </button>
                <button
                  onClick={() => setActiveTab("create")}
                  className={`pb-3 text-sm font-semibold transition-colors ${
                    activeTab === "create"
                      ? "text-Yprimary border-b-2 border-Yprimary"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {t("login.createTab")}
                </button>
              </div>

              {/* Form */}
              {activeTab === "login" ? <LoginForm /> : <RegisterForm />}

              {/* line */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {t("login.or")}
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 ">
                <button className="flex-1 flex items-center bg-gradient-to-r from-red-500 to-yellow-400 justify-center gap-2 border border-gray-300 dark:border-gray-600 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <FcGoogle />
                  <span className="text-sm font-medium  text-gray-700 dark:text-gray-300">
                    {t("login.google")}
                  </span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <BsFacebook />
                  <span className="text-sm font-medium">{t("login.facebook")}</span>
                </button>
              </div>
            </div>
          </ErrorBoundry>
        </div>
      </div>
    </>
  );
};

export default Login;

