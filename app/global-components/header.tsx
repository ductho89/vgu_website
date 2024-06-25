import SubNav from './sub-nav';
import MainNavServer from './main-nav-server';
export default function Header() {
  return (
    <div className="md:h-30 h-30 mb-4 w-screen bg-white shadow-lg">
      <SubNav />
      <MainNavServer />
    </div>
  );
}
