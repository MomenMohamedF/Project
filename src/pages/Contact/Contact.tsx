import Tap from "@/components/common/tap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LuMapPin } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaPinterestP,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900/95">
      <Tap pageName={t("nav.contact")} />

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./assets/images/contact.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-full border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white drop-shadow-lg">
              {t("contact.hero.title")}
            </h1>
          </div>
          <p className="mt-6 text-white/90 max-w-xl text-center text-sm md:text-base drop-shadow-md font-medium">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left section*/}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">
                {t("contact.form.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("contact.form.subtitle")}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    placeholder={t("contact.form.namePlaceholder")}
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                <Input
                  id="subject"
                  placeholder={t("contact.form.subjectPlaceholder")}
                  className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="min-h-[150px] bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 resize-none"
                />
              </div>

              <Button className="w-full h-12 text-base font-semibold bg-[#D4AF37] hover:bg-[#C5A028] text-white">
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>

          {/* Right section */}
          <div className="space-y-12 lg:pl-12 pt-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                {t("contact.info.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.info.subtitle")}
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                    <LuMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      {t("contact.info.visit.title")}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("contact.info.visit.address")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                    <FaPhoneVolume className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t("contact.info.call.title")}</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567
                      <br />
                      {t("contact.info.call.hours")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                    <CiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t("contact.info.email.title")}</h3>
                    <p className="text-muted-foreground">
                      hi@aurene.com
                      <br />
                      {t("contact.info.email.note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <h3 className="font-bold text-lg mb-4">{t("contact.info.follow")}</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center hover:bg-[#C5A028] transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center hover:bg-[#C5A028] transition-colors"
                >
                  <FaPinterestP className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center hover:bg-[#C5A028] transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="pb-16 px-4 container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold mb-2">
            {t("contact.map.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("contact.map.subtitle")}
          </p>
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.485293290685!2d-73.9856556!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622648500000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

