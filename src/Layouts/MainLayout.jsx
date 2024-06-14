import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  const user = true;
  const handleLogout = () => {
   
  };
  return (
    <div>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full bg-[#9DC08B] flex flex-col h-screen">
          {/* Page content here */}

          <div className="flex bg-[#EDF1D6]">
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button md:hidden p-2"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </label>
            <div className="flex-1 flex justify-center items-center md:hidden">
              <h1 className="font-bold">EventKotha</h1>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center ">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side   ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu p-4 w-80  bg-[#EDF1D6] text-base-content h-full">
            <div className="px-4 md:flex justify-start items-center hidden ">
              <h1 className="font-bold text-2xl">EventKotha</h1>
            </div>
            <div className="flex-1 h-full flex  flex-col justify-between p-4">
              <div className="flex flex-col gap-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `relative text-[#609966] after:bg-[#609966] after:absolute after:h-[2px] after:-bottom-1 after:left-0 md:after:w-[100%] after:w-[100%] `
                      : `relative text-ad hover:after:bg-[#609966] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[100%]`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `relative text-[#609966] after:bg-[#609966] after:absolute after:h-[2px] after:-bottom-1 after:left-0 md:after:w-[100%] after:w-[100%] `
                      : `relative text-ad hover:after:bg-[#609966] hover:after:absolute hover:after:h-[2px] hover:after:-bottom-1 hover:after:left-0 hover:after:w-[100%]`
                  }
                  to={"/aboutUs"}
                >
                  About Us
                </NavLink>
              </div>
              <div className="flex-">
                <>
                  {user && user ? (
                    <>
                      {/*  dropdown-left dropdown-bottom */}
                      <div className="dropdown dropdown-hover dropdown-top">
                        {user && user?.photoURL ? (
                          <img
                            src={user?.photoURL}
                            tabIndex={0}
                            role="button"
                            className="btn btn-circle hover:bg-transparent bg-transparent border-none btn-sm  w-full  text-p"
                            alt=""
                          />
                        ) : (
                          <div className="flex items-center gap-3">
                            <BsFillPersonFill
                            tabIndex={0}
                            role="button"
                            className="btn btn-circle  btn-md md:btn-sm w-full p-2 text-p"
                          ></BsFillPersonFill>
                          <p className="font-semibold">Email : {user?.email}</p>
                          </div>
                        )}
                        <ul
                          tabIndex={0}
                          className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li className="w-auto">
                            <NavLink
                              to={"/myTicket"}
                              className="justify-start flex flex-row-reverse gap-2 items-center text-md text-ad cursor-pointer "
                            >
                              <GrView className="font-semibold  " />
                              <p>My Ticket</p>
                            </NavLink>
                          </li>

                          <li className="w-auto">
                            <div
                              onClick={handleLogout}
                              className="justify-start flex flex-row-reverse gap-2 items-center text-md text-ad cursor-pointer "
                            >
                              <TbLogout2 className="font-semibold  " />
                              <p>logout</p>
                            </div>{" "}
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <BsFillPersonFill
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle  btn-md md:btn-sm w-full p-2 text-p"
                      ></BsFillPersonFill>
                      <Link
                        to={"/login"}
                        className="py-2 rounded-sm font-semibold px-4   "
                      >
                        Login
                      </Link>
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
