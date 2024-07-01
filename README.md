# ReactJS  `@tanstack-router` integration

![fon](https://i.ytimg.com/vi/OwoZtv6u9p4/maxresdefault.jpg)


## Instalition

### To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rofiyev/tanstack-router_reactjs.git
   cd tanstack-router_reactjs
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```
   
Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.


# Configuring the programming environment

## Integrating `@tanstack-router` into React project

### Step 1: Integrating `@tanstack-router` into React project

ReactJS project will need to install @tanstack-router packages

```
npm i @tanstack/react-router @tanstack/router
```

### Step 2: You need to create routers

We need to open the router file in the src folder. And we can write the necessary routers in it. We need to create all the pages we need and import them. To our main rootrouter we send our `<App/>` component. `<App/>` component contains all children. So we need to send it and `<Outlet />` component and import it from `@tanstack/react-router`! Now we can **export** the `router`

- `src/`
    - `router/`
        - `index.ts`  

```typescript
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
```

### Step 3: Connecting the router to the main file

We need to import router here and get it's `RouterProvider` from `@tanstack/react-router` inside **Reactjs**'s `render` method and to its **router props** we send our own `router`!

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/index.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
