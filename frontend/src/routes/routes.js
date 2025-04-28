import Dashboard from "../pages/Dashboard";
import Login from "../components/Login";
import ForgetPassword from "../pages/ForgetPassword";
import AddNewPassword from "../pages/AddNewPassword";
import Profile from "../pages/Profile";
import AddNewEmployee from "../pages/AddNewEmployee";
import AllEmployees from "../pages/AllEmployees";
import EditProfile from "../pages/EditProfile";
import ApplyLeave from "../pages/ApplyLeave";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
    {
      path: "/dashboard",
      component: Dashboard,
      exact: true,
    },
    {
      path: "/login",
      component: Login,
      exact: true,
    },
    {
      path: "/forget-password",
      component: ForgetPassword,
      exact: true,
    },
    {
        path: "/new-password",
        component: AddNewPassword,
        exact: true,
      },
    {
      path: "/dashboard/profile",
      component: Profile,
      exact: true,
    },
    {
      path: "/dashboard/add-new-employee",
      component: AddNewEmployee,
      exact: true,
    },
    {
      path: "/dashboard/all-employees",
      component: AllEmployees,
      exact: true,
    },
    {
      path: "/dashboard/edit-profile",
      component: EditProfile,
      exact: true,
    },
    {
      path: "/dashboard/apply-leave",
      component: ApplyLeave,
      exact: true,
    },
  ];
  
  export default routes;