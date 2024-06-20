import { Navigate, createBrowserRouter } from "react-router-dom";
import { DownloadComp1, DownloadComp2, UploadComp1, UploadComp2 } from "../pages";
import Layout from "../pages/Layout";

const ROUTES = [
    {
        path: '',
        element: <Navigate to='upload-1' replace />,
    },
    {
        path: '',
        element: (
            <Layout />
        ),
        children: [
            {
                path: 'upload-1',
                element: <UploadComp1 />
            },
            {
                path: 'upload-2',
                element: <UploadComp2 />
            },
            {
                path: 'download-1',
                element: <DownloadComp1 />
            },
            {
                path: 'download-2',
                element: <DownloadComp2 />
            },
        ]
    },

]

export const router = createBrowserRouter(ROUTES)