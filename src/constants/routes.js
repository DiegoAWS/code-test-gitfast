import Commits from "../modules/commits"
import LandingPage from "../modules/landing"
import Profile from "../modules/profile"


const routes = [
    {
        path: "/",
        exact: true,
        main: 'Home',
        component: LandingPage
    },
    {
        path: "/commits",
        exact: true,
        main: 'Commits',
        component: Commits
    },
    {
        path: "/profile",
        exact: true,
        main: 'Profile',
        component: Profile
    },
]

export default routes