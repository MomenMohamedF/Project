import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Shop = lazy(() => import("./Shop/Shop"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Login = lazy(() => import("./login"));
const Contact = lazy(() => import("./Contact/Contact"));
const Cart = lazy(() => import("./Cart/cart"));

export { Home, About, Shop, Dashboard, Login, Contact, Cart };
