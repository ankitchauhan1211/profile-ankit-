import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sidebarData } from "./sidebarData";

const AppSidebar = () => {
  const [activeKey, setActiveKey] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");

  // 🔹 Restore state on reload
  useEffect(() => {
    const savedActive = localStorage.getItem("activeSidebarKey");
    const savedOpen = localStorage.getItem("openSubMenuKey");

    if (savedActive) setActiveKey(savedActive);
    if (savedOpen) setOpenSubMenu(savedOpen);
  }, []);

  const handleItemClick = (key) => {
    setActiveKey(key);
    localStorage.setItem("activeSidebarKey", key);
  };

  const handleChildClick = (parentKey, childKey) => {
    setActiveKey(childKey);
    setOpenSubMenu(parentKey);

    localStorage.setItem("activeSidebarKey", childKey);
    localStorage.setItem("openSubMenuKey", parentKey);
  };

  const getItemStyle = (key) => ({
    backgroundColor: activeKey === key ? "#4f46e5" : "transparent",
    color: activeKey === key ? "#ffffff" : "#374151",
    borderRadius: "8px",
    // margin: "6px",
  });

  return (
    <Sidebar backgroundColor="#f9fafb" style={{ height: "100vh" }}>
      <Menu
        menuItemStyles={{
          button: {
            "&:hover": {
              backgroundColor: "#e0e7ff",
              color: "#1e40af",
            },
          },
        }}
      >
        {sidebarData.map((item) => {
          // 🔹 Normal menu
          if (!item.children) {
            return (
              <MenuItem
                key={item.key}
                icon={item.icon ? <item.icon /> : null}
                style={getItemStyle(item.key)}
                onClick={() => handleItemClick(item.key)}
              >
                {item.label}
              </MenuItem>
            );
          }

          // 🔹 SubMenu
          return (
            <SubMenu
              key={item.key}
              icon={item.icon ? <item.icon /> : null}
              label={item.label}
              open={openSubMenu === item.key}
              onOpenChange={(open) => {
                setOpenSubMenu(open ? item.key : "");
                localStorage.setItem(
                  "openSubMenuKey",
                  open ? item.key : ""
                );
              }}
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.key}
                  icon={child.icon ? <child.icon /> : null}
                  style={getItemStyle(child.key)}
                  onClick={() =>
                    handleChildClick(item.key, child.key)
                  }
                >
                  {child.label}
                </MenuItem>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
