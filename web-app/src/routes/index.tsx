import Layout from "@/theme/Layout";
import Home from "@/pages/Home";
import Materials from "@/pages/Inventory/Materials";
import Warehouse from "@/pages/Inventory/Warehouse";
import Suppliers from "@/pages/Inventory/Suppliers";
import Inventory from "@/pages/Inventory/Inventory";
import Counting from "@/pages/Inventory/Counting";
import Transfer from "@/pages/Inventory/Transfer";
import Scrap from "@/pages/Inventory/Scrap";
import EarlyWarning from "@/pages/Inventory/EarlyWarning";

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
                path: "/inventory/suppliers",
                element: <Suppliers />,
            },
            {
                path: "/inventory/materials",
                element: <Materials />,
            },
            {
                path: "/inventory/warehouse",
                element: <Warehouse />,
            },
            {
                path: "/inventory/inventory",
                element: <Inventory />,
            },
            {
                path: "/inventory/counting",
                element: <Counting />,
            },
            {
                path: "/inventory/transfer",
                element: <Transfer />,
            },
            {
                path: "/inventory/scrap",
                element: <Scrap />,
            },
            {
                path: "/inventory/early-warning",
                element: <EarlyWarning />,
            },
        ],
    },
];

export default routes;
