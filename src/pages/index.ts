import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About"));
const Shop = lazy(() => import("./Shop/Shop"));
const Dashboard = lazy(() => import("./Dashboard"));
const Login = lazy(() => import("./login"));
const Contact = lazy(() => import("./Contact"));

export { Home, About, Shop, Dashboard, Login, Contact };
