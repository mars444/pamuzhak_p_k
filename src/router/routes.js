import {MainPage, Prices, Contacts, JuridicalInfo} from "../pages/";


export const mainRoutes = [
    {
        path: '/',
        Component: MainPage,
        exact: true,
        name: 'Главная',
    },
    {
        path: "/prices",
        Component: Prices,
        name: 'Услуги и цены',
    },
    {
        path: "/contacts",
        Component: Contacts,
        name: 'Контакты и график работы',
    },
    {
        path: "/juridicalInfo",
        Component: JuridicalInfo,
        name: 'Юридическая информация',
    },

];
