import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";

const Tap = ({ pageName }: { pageName?: string }) => {
  const location = useLocation();
  const { pathname } = location;

  let breadcrumbContent = null;

  if (pathname === "/login") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">Login</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname === "/about") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">About</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname === "/contact") {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">Contact</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  } else if (pathname.startsWith("/shop/")) {
    breadcrumbContent = (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`/shop/watches`}>Shop</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-DYprimary">{pageName}</BreadcrumbPage>
        </BreadcrumbItem>
      </>
    );
  }

  return (
    <div>
      <Breadcrumb className="bg-[#F9FAFB] p-3 h-12 dark:bg-gray-800/95">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbContent}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Tap;
