import Footer from './Footer';
import { Outlet } from 'react-router';
import Navigation from './Navigation';
import SideButtons from './SideButtons';
import BackTopBtn from './BackTopBtn';
import CookiePopup from './CookiePopup';
import BottomNav from './BottomNav';
import Chat from './live-chat/Chat';

function AppLayout() {
  return (
    <div>
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
