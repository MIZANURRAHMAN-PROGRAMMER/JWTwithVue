
import Register from './pages/auth/register.vue'
import Login from './pages/auth/login.vue';
import Dashboard from './layouts/adminApp.vue';
import PageNotFound from './pages/pagenotfound.vue';
import User from './pages/user/user.vue'

export const routes=[
    {
        path : '/login',
        name : 'login',
        component : Login
    },
    {
        path : '/register',
        name : 'register',
        component : Register,
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component : Dashboard,
        children: [
            {
                path : '/user',
                name : 'user',
                component : User,
            },
        ]
    },

    {
        path: "*",
        component: PageNotFound
    }
]
