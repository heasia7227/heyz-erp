import Layout from "@/theme/Layout";
import Home from "@/pages/Home";
import Materials from "@/pages/Inventory/Materials";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/inventory/materials",
                element: <Materials />,
            },
        ],
    },
];

export default routes;
