import {MainPage} from "../../../pages/MainPage/index";
import {AnimePage} from "../../../pages/AnimePage.js";

export const routeConfig = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/Anime',
        element: <AnimePage/>
    }
]