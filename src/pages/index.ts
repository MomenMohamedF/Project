import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About"));
const Shop = lazy(() => import("./Shop/Shop"));
const Dashboard = lazy(() => import("./Dashboard"));
export { Home, About, Dashboard, Shop };
