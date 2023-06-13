import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex min-h-screen"> 
        <Sidebar />
        <Navbar />
        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  ); 
}

export default Layout;

{/* <head>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta name="author" content="Michael Prietl" />
<meta name="description" content="Welcome to the personal website of Michael Prietl, also known as MaikeruDev. Get insights into my projects, skills, and experiences as a developer." />

<meta property="og:title" content="Michael Prietl | MaikeruDev - Personal Website" />
<meta property="og:description" content="Welcome to the personal website of Michael Prietl, also known as MaikeruDev. Get insights into my projects, skills, and experiences as a developer." />
<meta property="og:url" content="https://maikeru.dev" />
<meta property="og:type" content="website" />

<meta name="language" content="English" />

<meta name="keywords" content="personal website, developer, projects, skills, experiences" />

<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black"/> 

<meta name="twitter:site" content="@MaikeruDev" />

<meta name="msapplication-TileColor" content="#ffffff" />
</head> */}