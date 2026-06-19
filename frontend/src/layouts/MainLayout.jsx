import { Outlet } from "react-router";
import { Nav, Footer } from "../components/site";

function MainLayout() {
    return (
        <> 
            <Nav/>
            <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
                <Outlet />
            </main>    
            <Footer/>
        </>

    );
}

export default MainLayout;