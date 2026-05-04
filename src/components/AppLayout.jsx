import Footer from "./Footer";
import { Outlet } from "react-router";
import Navigation from "./Navigation";
import SideButtons from "./SideButtons";
import BackTopBtn from "./BackTopBtn";
import CookiePopup from "./CookiePopup";
import BottomNav from "./BottomNav";
import Chat from "./live-chat/Chat";
import { Helmet } from "react-helmet-async";
import c from "../utils/content";
import { useContent } from "../hooks/useContent";

function AppLayout() {
  const { contentMap } = useContent();

  return (
    <div>
      <Helmet>
        {c(contentMap, "global.favicon") && (
          <link
            rel="icon"
            type="image/png"
            href={c(contentMap, "global.favicon")}
          />
        )}
      </Helmet>

      <Navigation />
      <div role="main">
        <Outlet />
      </div>
      <Chat />
      <SideButtons />
      <BackTopBtn />
      <CookiePopup />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default AppLayout;
