import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "@/lib/utils/api";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose }: ForgotPasswordModalProps) => {
  const { t } = useTranslation();
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const { mutate: mutateForgotPassword, isPending: isForgotPasswordPending } =
    useMutation({
      mutationFn: (email: string) => {
        return api.post("auth/forget-password", { email });
      },
      onSuccess: (data) => {
        toast.success(data.data.message || t("resetPassword.success"));
        onClose();
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data?.message || t("resetPassword.error")
        );
      },
    });

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotPasswordEmail) {
      toast.error(t("resetPassword.emailRequired"));
      return;
    }
    mutateForgotPassword(forgotPasswordEmail);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("resetPassword.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("resetPassword.subtitle")}
        </p>
        <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
          <input
            type="email"
            placeholder={t("resetPassword.emailPlaceholder")}
            className="input w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            required
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors font-bold"
            >
              {t("resetPassword.cancel")}
            </button>
            <button
              type="submit"
              disabled={isForgotPasswordPending}
              className="px-6 py-2 bg-Yprimary text-black font-extrabold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              {isForgotPasswordPending ? t("resetPassword.sending") : t("resetPassword.sendLink")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;

