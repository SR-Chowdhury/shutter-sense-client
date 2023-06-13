import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashboardLayout from "../Layouts/DashboardLayout";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass/MyClass";
import UpdateClass from "../Pages/Dashboard/InstructorDashboard/UpdateClass/UpdateClass";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClass/ManageClass";
import Feedback from "../Components/Feedback/Feedback";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import StudentHome from "../Pages/Dashboard/StudentDashboard/StudentHome/StudentHome";
import MySelectedClass from "../Pages/Dashboard/StudentDashboard/MySelectedClass/MySelectedClass";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import MyEnrolledClass from "../Pages/Dashboard/StudentDashboard/MyEnrolledClass/MyEnrolledClass";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <Classes />
            }
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [

            // ADMIN DASHBOARD
            {
                path: "adminhome",
                element: <AdminHome/>
            },
            {
                path: "manageclass",
                element: <ManageClass/>
            },
            {
                path: "feedback/:id",
                element: <Feedback/>
            },
            {
                path: "manageusers",
                element: <ManageUser/>
            },

            // INSTRUCTOR DASHBOARD
            {
                path: "instructorhome",
                element: <InstructorHome/>
            },
            {
                path: "addclass",
                element: <AddClass/>
            },
            {
                path: "updateclass/:id",
                element: <UpdateClass/>
            },
            {
                path: "instructor-class",
                element: <MyClass/>
            },

            // STUDENT DASHBOARD
            {
                path: "studenthome",
                element: <StudentHome/>
            },
            {
                path: "selectedclass",
                element: <MySelectedClass/>
            }, 
            {
                path: "payment",
                element: <Payment/>
            }, 
            {
                path: "paymenthistory",
                element: <PaymentHistory/>
            },
            {
                path: "myenrolledclass",
                element: <MyEnrolledClass/>
            }
        ]
    }
]);


export default router;