import Layout from "@/theme/Layout";
import Home from "@/pages/Home";
import Materials from "@/pages/Inventory/Materials";
import Warehouse from "@/pages/Inventory/Warehouse";

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
            {
                path: "/inventory/warehouse",
                element: <Warehouse />,
            },
        ],
    },
];

export default routes;
