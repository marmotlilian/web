import { Outlet } from 'react-router-dom';
import Masthead from '../components/Masthead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SoundToggle from '../components/SoundToggle';

export default function MainLayout() {
  return (
    <div className="min-h-screen paper-texture text-ink dark:text-walnut-text">
      <Masthead />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SoundToggle />
    </div>
  );
}
