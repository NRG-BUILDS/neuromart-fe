import { ReactNode, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import bg from '@/images/background/navbar-bg.png';
import { FaHome, FaRobot } from 'react-icons/fa';
import {
  IoCard,
  IoBuild,
  IoRocket,
  IoPerson,
  IoDocument,
} from 'react-icons/io5';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
const routes = [
  { label: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
  { label: 'AI Agents', path: '/agents', icon: <FaRobot /> },
  { label: 'Code Editor', path: '/code-editor', icon: <IoCard /> },
  {
    label: 'Decentralized computation',
    path: '/comp',
    icon: <IoBuild />,
  },
];
const marketplaceRoutes = [
  { label: 'Datasets', path: '/marketplace/datasets', icon: <IoPerson /> },
  { label: 'Models', path: '/marketplace/models', icon: <IoDocument /> },
  { label: 'Sign Up', path: '/signup', icon: <IoRocket /> },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, _] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-80 rounded-3xl flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        {isLoading && (
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        )}{' '}
        <img
          src={bg}
          alt=""
          onLoad={() => setIsLoading(false)}
          className="size-full object-cover  relative"
        />
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4 px-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col">
              {/* <!-- Menu Item Chart --> */}
              {routes.map((route) => (
                <NavButton route={route} pathname={pathname} />
              ))}
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MARKETPLACE
            </h3>

            <ul className="mb-6 flex flex-col">
              {/* <!-- Menu Item Chart --> */}

              {marketplaceRoutes.map((route) => (
                <NavButton route={route} pathname={pathname} />
              ))}
              {/* <!-- Menu Item Chart --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;

type Props = {
  route: {
    label: string;
    path: string;
    icon: ReactNode;
  };
  pathname: string;
};
export const NavButton = ({ route, pathname }: Props) => {
  return (
    <li>
      <NavLink
        to={route.path}
        className={`group relative flex items-center gap-2.5 rounded-2xl p-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-gradient-to-r from-[#3732FF]/50 to-transparent ${
          pathname.includes(route.path) &&
          'bg-gradient-to-r from-[#3732FF]/50 to-transparent'
        }`}
      >
        <div
          className={`rounded-xl size-8 flex items-center justify-center transition-all ${
            pathname.includes(route.path)
              ? 'bg-primary text-white'
              : 'bg-primary/20 text-primary'
          }`}
        >
          {route.icon}
        </div>
        {route.label}
      </NavLink>
    </li>
  );
};
