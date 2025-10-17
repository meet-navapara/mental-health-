import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Icons
import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { LiaVideoSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";

const DashboardLayout = () => {
  const tabs = [
    {
      name: "Dashboard",
      path: "/dashboard/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      name: "Availability",
      path: "/dashboard/availability",
      icon: <SlCalender />,
    },
    { name: "Sessions", path: "/dashboard/sessions", icon: <LiaVideoSolid /> },
    {
      name: "Message",
      path: "/dashboard/messages",
      icon: <LuMessagesSquare />,
    },
    {
      name: "Payment",
      path: "/dashboard/payment",
      icon: <RiSecurePaymentLine />,
    },
    { name: "Support", path: "/dashboard/support", icon: <BiSupport /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
  ];

  return (
    <div className="h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col z-10">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Logoipsum</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <NavLink
                  to={tab.path}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#65C6F2] text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col ml-64 h-full">
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to Dashboard
          </h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
