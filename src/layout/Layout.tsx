import { ReactNode, FC } from 'react';
import { useRouter } from 'next/router';

import NavigationButtons from '../components/common/NavigationButtons';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      {router.pathname !== '/' && <NavigationButtons />}

      <div className="layout-children">{children}</div>
    </div>
  );
};

export default Layout;
