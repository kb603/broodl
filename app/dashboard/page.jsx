import Main from "@/components/Main";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  const isAUthenticated = true;
  let children = <Login />;

  if (isAUthenticated) {
    children = <Dashboard />;
  }

  return <Main>{children}</Main>;
}
