import { Route, Switch } from "wouter";
import { DashboardLayout } from "./layouts";
import { ProtectedRoutes } from "./routes";

interface RouteProps {
  path: string;
  component: React.FC;
}

const renderRoutes = (routes: RouteProps[]) => {
  return (
    <>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path}>
          <Component />
        </Route>
      ))}
    </>
  );
};

export function Main() {
  return (
    <DashboardLayout>
      <Switch>{renderRoutes(ProtectedRoutes)}</Switch>
    </DashboardLayout>
  );
}
