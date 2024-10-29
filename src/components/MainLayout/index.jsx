import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="pt-[64px] min-h-[calc(100vh-113px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
