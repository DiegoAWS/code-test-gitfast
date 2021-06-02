import Commits from "../modules/commits/index"
import LandingPage from "../modules/landing/LandingPage"

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
]

export default routes