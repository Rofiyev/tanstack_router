import App from "../App";
import { About, Contact, Home } from "../pages";
import { RootRoute, Route, Router, Outlet } from "@tanstack/react-router";

const rootRouter = new RootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRouter,
  component: Home,
  path: "/",
});

const aboutRoute = new Route({
  getParentRoute: () => rootRouter,
  component: About,
  path: "/about",
});

const contactRoute = new Route({
  getParentRoute: () => rootRouter,
  component: Contact,
  path: "/contact",
});

const routeTree = rootRouter.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
