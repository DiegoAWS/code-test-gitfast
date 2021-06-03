import Commits from "../modules/commits"
import LandingPage from "../modules/landing"
import Profile from "../modules/profile"
import Repositories from "../modules/repositories/index"


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
        path: "/repositories",
        exact: true,
        main: 'Repositories',
        component: Repositories
    },
]

export default routes