import Commits from "../modules/commits"
import LandingPage from "../modules/landing"
import Profile from "../modules/profile"
import Settings from "../modules/settings"


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
    {
        path: "/settings",
        exact: true,
        main: 'Settings',
        component: Settings
    },
]

export default routes