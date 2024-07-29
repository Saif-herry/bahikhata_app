import { NullableProps } from '@/types/core';
import Head from 'next/head';
import { FC, useState } from 'react';
import BottomNavigation from './BottomNavigation';
import PanelDrawer from './PanelDrawer';
import PanelNav from './PanelNav';
import ResponsiveDrawer from './ResponsiveDrawer';

interface AppLayoutProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  description: string;
  ogImage: string;
}
const AppLayout: FC<NullableProps<AppLayoutProps>> = ({
  title = 'Welcome To Your Panel',
  children = <></>,
  description,
  ogImage
}) => {
  const [responsiveExpand, setResponsiveExpand] = useState<boolean>(false);
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title || 'Welcome to your panel'}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage || '/logo-primary.png'} />
      </Head>

      <main className={`relative w-full flex`}>
        <BottomNavigation
          responsiveExpand={responsiveExpand}
          setResponsiveExpand={setResponsiveExpand}
        />
        <div
          className={`transition-all duration-200 ease-linear hidden lg:block sticky top-0 overflow-y-scroll h-screen scroll-bar-none ${
            isAppDrawerOpen ? 'w-[20rem]' : 'w-[5rem]'
          }`}
        >
          <PanelDrawer
            isAppDrawerOpen={isAppDrawerOpen}
            setIsAppDrawerOpen={setIsAppDrawerOpen}
          />
        </div>
        <div className="lg:hidden">
          <ResponsiveDrawer
            responsiveExpand={responsiveExpand}
            setResponsiveExpand={setResponsiveExpand}
          />
        </div>

        <section
          className={`h-screen overflow-y-scroll transition-all duration-200 ease-linear ${
            isAppDrawerOpen
              ? 'w-full lg:max-w-[calc(100%-20rem)]'
              : 'w-full lg:max-w-[calc(100%-5rem)]'
          }
           `}
        >
          <PanelNav
            setIsAppDrawerOpen={setIsAppDrawerOpen}
            setResponsiveExpand={setResponsiveExpand}
          />
          <div className={`md:py-5 xl:py-7 2xl:py-8 pt-5 pb-20`}>
            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default AppLayout;
