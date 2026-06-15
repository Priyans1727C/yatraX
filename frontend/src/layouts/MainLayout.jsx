import { Outlet } from "react-router";


function MainLayout() {
    return (
        <> 
            <main className="min-h-screen">
                <Outlet />
            </main>    

        </>

    );
}

export default MainLayout;