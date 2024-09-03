import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import LoginPage from "../Pages/LoginPage";
import JobDetails from "../Pages/JobDetails";
import SignUpPage from "../Pages/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/salary", element: <SalaryPage /> },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({params}) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
      { path: "/job/:id", element: <JobDetails /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
  {
    path: "/login", element: <LoginPage />
  }
]);

export default router;
