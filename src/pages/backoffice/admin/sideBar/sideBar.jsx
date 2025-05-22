import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  LogOut,
  List,
  ListRestart,
  ListPlus,
} from "lucide-react";

const SideNavBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className="sidebar-link">
          <Home size={20} /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/productlist" className="sidebar-link">
          <Users size={20} /> <span>Users</span>
        </NavLink>
        <NavLink to="/admin/productlist" className="sidebar-link">
          <List size={20} /> <span>Product List</span>
        </NavLink>
        <NavLink to="/admin/productcreate" className="sidebar-link">
          <ListPlus size={20} /> <span>Product Create</span>
        </NavLink>

        <NavLink to="/admin/productedit" className="sidebar-link">
          <ListRestart size={20} /> <span>Product Modifier</span>
        </NavLink>

        <NavLink href="#" className="sidebar-link">
          <Settings size={20} /> <span>Settings</span>
        </NavLink>
        <NavLink href="#" className="sidebar-link logout">
          <LogOut size={20} /> <span>Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideNavBar;
