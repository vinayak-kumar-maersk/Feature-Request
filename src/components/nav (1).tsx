import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { Sidebar } from "@anchor/react-components";
import Avatar from "@material-ui/core/Avatar";
import {
  NavContainer,
  Image,
  NavMenu,
  NavItem,
  SearchBar,
  ProfileDrop,
  Nav,
  MobileIcon,
  DropDown,
  DropContent,
} from "./Navbar.elements (1)";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineCheckSquare,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => setShowDropdown(!showDropdown);

  const [showProfile, setShowProfile] = useState(false);
  const handleProfile = () => setShowProfile(!showProfile);

  return (
    <IconContext.Provider value={{ color: "black" }}>
      <Nav>
        <NavContainer>
          <NavItem>
            <MobileIcon onClick={handleDropdown}>
              {showDropdown ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            {showDropdown && (
              <div
                style={{
                  position: "relative",
                  margin: "0 -70px",
                  minHeight: "0",
                }}
              >
                <Sidebar
                  activeNav="home"
                  items={[
                    {
                      icon: <AiOutlineHome />,
                      id: "home",
                      path: "/home",
                      title: "Home",
                    },
                    {
                      icon: <AiOutlineCalendar />,
                      id: "tasklist",
                      path: "/tasklist",
                      subMenu: [
                        {
                          icon: <GoCheck />,
                          id: "my_tasks",
                          path: "/my_tasks",
                          title: "My task (10)",
                        },
                        {
                          id: "johns_task",
                          path: "/john-task",
                          title: "John’s task",
                        },
                        {
                          id: "williams_task",
                          path: "/williams-task",
                          title: "William’s task",
                        },
                        {
                          id: "all_task",
                          path: "/all-task",
                          title: "All task",
                        },
                        {
                          id: "completed_task",
                          path: "/completed-task",
                          title: "Completed task",
                        },
                      ],
                      title: "Tasklist",
                    },
                    {
                      icon: <AiOutlineUser />,
                      id: "admin",
                      path: "/admin",
                      title: "Admin",
                    },
                    {
                      icon: <AiOutlineCheckSquare />,
                      id: "modeler",
                      path: "/modeler",
                      title: "Modeler",
                    },
                    {
                      icon: <BsGlobe />,
                      id: "process",
                      path: "/process",
                      subMenu: [
                        {
                          icon: "clipboard-check-text",
                          id: "process_instances",
                          path: "/process-instances",
                          title: "Process Instances",
                        },
                        {
                          icon: "clipboard-check-text",
                          id: "create_workflow",
                          path: "/create-workflow",
                          title: "Create Workflow",
                        },
                        {
                          icon: "clipboard-check-text",
                          id: "deploy",
                          path: "/deploy",
                          title: "Deploy",
                        },
                      ],
                      title: "Process",
                    },
                  ]}
                  onNavClick={function noRefCheck() {}}
                  onToggle={function noRefCheck() {}}
                />
              </div>
            )}
          </NavItem>
          {/* <Image
            src="https://1000logos.net/wp-content/uploads/2020/09/Maersk-Logo.png"
            alt=""
            to="/"
          /> */}
          <NavMenu>
            <NavItem>
              <SearchBar
                fit="medium"
                hint=""
                icon={AiOutlineSearch}
                id="textInput"
                label=""
                min=""
                onChange={function noRefCheck() {}}
                onClear={function noRefCheck() {}}
                onClick={function noRefCheck() {}}
                onIconClick={function noRefCheck() {}}
                placeholder="Search......"
                required
                type="text"
                value=""
                variant="default"
              />
            </NavItem>

            <NavItem>
              <IoNotificationsOutline />
              <DropDown>
                <DropContent href="#">Notification 1</DropContent>
                <DropContent href="#">Notification 2</DropContent>
                <DropContent href="#">Notification 3</DropContent>
              </DropDown>
            </NavItem>
            <NavItem>
              <Avatar
                style={{ border: "2px solid gray", margin: 7, fontSize: "2px" }}
                alt=""
                src="https://th.bing.com/th/id/OIP.neTp253amaORNv-lj2e9-AHaE8?pid=ImgDet&rs=1"
                onClick={handleProfile}
              />
              {showProfile && (
                <ProfileDrop>
                  <DropContent>My Profile</DropContent>
                  <DropContent>My Posts</DropContent>
                  <DropContent>Sign Out</DropContent>
                </ProfileDrop>
              )}
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Header;
