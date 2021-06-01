import Commits from "../components/Commits/index"
import LandingPage from "../components/LandingPage"

const routes=[
    {
        path: "/",
        exact: true,
        main:  'Home',
        component:LandingPage
    },
    {
        path: "/commits",
        exact: true,
        main:  'Commits',
        component:Commits
    },
]

export default routes