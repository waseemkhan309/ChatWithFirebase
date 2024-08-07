import { createBrowserRouter } from 'react-router-dom';
import UIChat from '../Pages/UIChat';
import SignOut from '../Pages/SignOut';
import SignIn from '../Pages/SignIn';

const router = createBrowserRouter([
    {
        path: '/',
        element: <UIChat />,
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signout',
        element: <SignOut />
    }
])

export default router;