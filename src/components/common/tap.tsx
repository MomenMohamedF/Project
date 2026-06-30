import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { useTranslation } from "react-i18next";

const Tap = ({ pageName }: { pageName?: string }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { pathname } = location;
  const isRtl = i18n.dir() === "rtl";

  let breadcrumbContent = null;

  if (pathname === "/login") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator className={isRtl ? "rotate-180" : ""} />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">{t("nav.login")}</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname === "/about") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator className={isRtl ? "rotate-180" : ""} />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">{t("nav.about")}</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname === "/contact") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator className={isRtl ? "rotate-180" : ""} />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">{t("nav.contact")}</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname.startsWith("/shop/")) {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator className={isRtl ? "rotate-180" : ""} />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`/shop`}>{t("nav.shop")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={isRtl ? "rotate-180" : ""} />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">
            {pageName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  }

  return (
    <div dir={i18n.dir()}>
      <Breadcrumb className="bg-[#F9FAFB] p-3 h-12 dark:bg-gray-800/95">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">{t("nav.home")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbContent}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Tap;

