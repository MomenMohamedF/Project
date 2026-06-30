import Tap from "@/components/common/tap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { FaRegGem } from "react-icons/fa6";
import { FiAward, FiHeadphones } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { LuTruck } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900/95">
      <Tap pageName={t("nav.about")} />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("about.hero.title")}{" "}
              <span className="text-yellow-500">{t("about.hero.highlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video md:aspect-square overflow-hidden rounded-xl shadow-2xl">
              <img
                src="./assets/images/About1.png"
                alt="Elegant Jewelry"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yprimary">
              {t("about.visionary.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("about.visionary.subtitle")}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg border-none">
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="flex-shrink-0 text-center">
                <Avatar className="w-40 h-40 border-4 border-yellow-500 shadow-md">
                  <AvatarImage
                    src="./assets/images/About-leader.png"
                    alt={t("about.visionary.name")}
                  />
                  <AvatarFallback>RF</AvatarFallback>
                </Avatar>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">{t("about.visionary.name")}</h3>
                  <p className="text-yellow-600 font-medium text-sm">
                    {t("about.visionary.role")}
                  </p>
                </div>
                <div className="flex gap-2 justify-center mt-3">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  >
                    {t("about.visionary.exp15")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-500 text-yellow-600"
                  >
                    {t("about.visionary.expert")}
                  </Badge>
                </div>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <blockquote className="italic text-lg text-foreground/80 border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-r">
                  "{t("about.visionary.quote")}"
                </blockquote>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("about.visionary.description")}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">
                      15+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("about.visionary.stats.exp")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">
                      500+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("about.visionary.stats.designs")}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">
                      50+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("about.visionary.stats.awards")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Section3 */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-600">{t("about.journey.title")}</h2>
          <p className="text-muted-foreground mt-2">
            {t("about.journey.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <MdOutlineRocketLaunch className="w-6 h-6" />
              </div>
              <CardTitle>{t("about.journey.founded.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm ">
                {t("about.journey.founded.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <FaRegGem className="w-6 h-6" />
              </div>
              <CardTitle>{t("about.journey.firstCollection.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm ">
                {t("about.journey.firstCollection.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <GoGlobe className="w-6 h-6" />
              </div>
              <CardTitle>{t("about.journey.globalReach.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {t("about.journey.globalReach.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/*Section4*/}
      <div className="bg-background py-16 dark:bg-gray-900/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-600">
              {t("about.whyChooseUs.title")}
            </h2>
            <p className="text-muted-foreground mt-2">
              {t("about.whyChooseUs.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{t("about.whyChooseUs.quality.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("about.whyChooseUs.quality.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <LuTruck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{t("about.whyChooseUs.delivery.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("about.whyChooseUs.delivery.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <FiHeadphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{t("about.whyChooseUs.support.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("about.whyChooseUs.support.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Section5 */}
      <div className="relative py-24 bg-gradient-to-r from-red-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('./assets/images/about3.png')]"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t("about.cta.title")}
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            {t("about.cta.subtitle")}
          </p>

          <div className="flex justify-center gap-4 mb-10 text-white">
            <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs uppercase">{t("about.cta.hours")}</div>
            </div>
            <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">23</div>
              <div className="text-xs uppercase">{t("about.cta.minutes")}</div>
            </div>
            <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
              <div className="text-2xl font-bold">41</div>
              <div className="text-xs uppercase">{t("about.cta.seconds")}</div>
            </div>
          </div>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12 text-base">
              {t("common.exploreCollection")}
            </Button>
            <div className="flex flex-1 gap-2">
              <Input
                type="email"
                placeholder={t("common.footer.emailPlaceholder")}
                className="bg-transparent border-red-300 text-white placeholder:text-red-300 h-12"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12">
                {t("common.subscribe")}
              </Button>
            </div>
          </div>
          <p className="mt-6 text-xs text-red-200 opacity-80">
            <span className="inline-block mr-1">🛡️</span> {t("about.cta.shippingNote")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

