import {MainPage, Prices, Contacts, JuridicalInfo} from "../pages/";


export const mainRoutes = [
    {
        path: '/',
        Component: MainPage,
        exact: true,
    },
    {
        path: "/prices",
        Component: Prices,
    },
    {
        path: "/contacts",
        Component: Contacts,
    },
    {
        path: "/juridicalInfo",
        Component: JuridicalInfo,
    },

];
