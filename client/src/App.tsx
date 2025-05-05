import {Route, Router, Switch} from "wouter";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./lib/queryClient";
import {Toaster} from "@/components/ui/toaster";
import NotFound from "./pages/not-found";
import HomePage from "./pages/HomePage";
import {useEffect, useState} from "react";

// Use a custom base path for GitHub Pages
const useHashLocation = () => {
    const [location, setLocation] = useState(
        window.location.pathname.replace(/^\/ubuntu-mirror\/?/, "/") || "/"
    );

    useEffect(() => {
        // Handle location changes
        const handleLocationChange = () => {
            setLocation(window.location.pathname.replace(/^\/ubuntu-mirror\/?/, "/") || "/");
        };

        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    // Return current location and a function to navigate
    return [
        location,
        (to: string) => {
            // Add the base path when navigating
            const targetPath = to === "/" ? "/ubuntu-mirror/" : `/ubuntu-mirror${to}`;
            window.history.pushState(null, "", targetPath);
            setLocation(to);
        }
    ] as const;
};

function AppRouter() {
    // @ts-ignore
    return <><Router hook={useHashLocation}>
        <Switch>
            <Route path="/" component={HomePage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router></>;
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
            <Toaster />
        </QueryClientProvider>
    );
}

export default App;