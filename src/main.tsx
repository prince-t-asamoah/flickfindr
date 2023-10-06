import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import SearchPage from './pages/SearchPage.tsx';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/search', element: <SearchPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
