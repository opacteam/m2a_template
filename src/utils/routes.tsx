import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
export const ROUTES = [
  { path: "/", Component: Home },
  { path: "home", Component: Home },
];
