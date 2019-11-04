import HomePage from "./page/HomePage";
import AboutUsPage from "./page/AboutUsPage";
import BlogPage from "./page/BlogPage";
import PostPage from "./page/PostPage";
import NotFoundPage from "./page/NotFoundPage";
import Login from "./component/Login";
import ProfilePage from "./page/ProfilePage";
import Logout from "./page/Logout";

const routes = [
    {
        exact:true,
        path: '/',
        component: HomePage
    },

    {
        path: '/about-us',
        component: AboutUsPage
    },

    {
        path: '/blog',
        component: BlogPage
    },

    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/login',
        component: Login
    },
    {
        private:true,
        path: '/profile',
        component: ProfilePage
    },

    {

        path: '/logout',
        component: Logout
    },

    {

        component: NotFoundPage
    },
]

export  default  routes;