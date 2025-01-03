import React from 'react'
import Header from "../ui/components/Header";
import Mockup from './mockup/page';

const Layout = ({children}:{children : React.ReactNode}) => {
  return (
    <div>
      <Header />
      <div className="flex justify-around items-start m-4 rounded-xl">
        <Mockup />
        {children}
      </div>
    </div>
  );
}

export default Layout;