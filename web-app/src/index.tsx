import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const router = createBrowserRouter(routes);

root.render(
    <>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </>
);
