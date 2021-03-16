import { ListComponent } from "./pages/list.js"
import { FormComponent } from "./pages/form.js"


export const routes = [
    {
        path: '/',
        component: ListComponent
    },
    {
        path: '/form',
        component: FormComponent
    }
]