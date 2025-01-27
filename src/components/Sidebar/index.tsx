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
import { Button } from '../ui/button';
import docCardBg from '@/images/background/doc_card.png';

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
    path: '/decentralized_computation',
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
          <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-primary to-secondary"></div>
        )}{' '}
        <img
          src={bg}
          alt=""
          onLoad={() => setIsLoading(false)}
          className={`size-full object-cover animate  relative ${
            isLoading ? 'hidden' : ''
          }`}
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
      {/* <!-- SIDEBAR HEADER END --> */}
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

        {/* <!-- Sidebar Footer --> */}
        <div className=" p-4 grid gap-4">
          <Button variant="outline" className="border-strokedark">
            Connect Wallet
          </Button>
          <div
            className="rounded-xl text-white p-5 grid gap-1"
            style={{
              backgroundImage: `url(${docCardBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.499878" width="35" height="35" rx="12" fill="white" />
              <path
                d="M17.9999 8.5C13.0311 8.5 8.99988 12.5312 8.99988 17.5C8.99988 22.4687 13.0311 26.5 17.9999 26.5C22.9686 26.5 26.9999 22.4687 26.9999 17.5C26.9999 12.5312 22.9686 8.5 17.9999 8.5ZM17.7186 22.75C17.5332 22.75 17.3519 22.695 17.1978 22.592C17.0436 22.489 16.9234 22.3426 16.8525 22.1713C16.7815 22 16.763 21.8115 16.7991 21.6296C16.8353 21.4477 16.9246 21.2807 17.0557 21.1496C17.1868 21.0185 17.3539 20.9292 17.5357 20.893C17.7176 20.8568 17.9061 20.8754 18.0774 20.9464C18.2487 21.0173 18.3951 21.1375 18.4981 21.2916C18.6011 21.4458 18.6561 21.6271 18.6561 21.8125C18.6561 22.0611 18.5574 22.2996 18.3815 22.4754C18.2057 22.6512 17.9673 22.75 17.7186 22.75ZM19.2861 17.9687C18.5263 18.4787 18.4218 18.9461 18.4218 19.375C18.4218 19.549 18.3526 19.716 18.2295 19.839C18.1065 19.9621 17.9395 20.0312 17.7655 20.0312C17.5915 20.0312 17.4245 19.9621 17.3015 19.839C17.1784 19.716 17.1093 19.549 17.1093 19.375C17.1093 18.348 17.5818 17.5314 18.5539 16.8784C19.4577 16.2719 19.9686 15.8875 19.9686 15.0423C19.9686 14.4677 19.6405 14.0312 18.9613 13.7083C18.8014 13.6323 18.4457 13.5583 18.0078 13.5634C17.4585 13.5705 17.0319 13.7017 16.7033 13.9661C16.0836 14.4648 16.0311 15.0077 16.0311 15.0156C16.027 15.1018 16.0059 15.1863 15.9691 15.2644C15.9322 15.3424 15.8804 15.4124 15.8165 15.4704C15.7527 15.5284 15.678 15.5732 15.5968 15.6024C15.5156 15.6315 15.4294 15.6444 15.3432 15.6402C15.2571 15.6361 15.1725 15.615 15.0945 15.5782C15.0165 15.5414 14.9465 15.4895 14.8885 15.4256C14.8305 15.3618 14.7856 15.2871 14.7565 15.2059C14.7273 15.1247 14.7145 15.0385 14.7186 14.9523C14.7238 14.8384 14.803 13.8123 15.8797 12.9461C16.438 12.497 17.1482 12.2636 17.9891 12.2533C18.5844 12.2462 19.1436 12.347 19.5228 12.5261C20.6577 13.0628 21.2811 13.9577 21.2811 15.0423C21.2811 16.6281 20.2213 17.3402 19.2861 17.9687Z"
                fill="#0075FF"
              />
            </svg>
            <h5 className="text-xl leading-none mt-4">Need Help?</h5>
            <p className="text-sm mb-2">Please check out our docs</p>
            <Button className="rounded-md bg-secondary">Read Docs</Button>
          </div>
        </div>
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
