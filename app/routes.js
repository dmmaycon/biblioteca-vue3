import { AboutComponent } from "./pages/about.js"
import { ListComponent } from "./pages/list.js"
import { FormComponent } from "./pages/form.js"


export const routes = [
    {
        path: '/',
        component: AboutComponent
    },
    {
        path: '/list',
        component: ListComponent
    },
    {
        path: '/form',
        component: FormComponent
    }
]