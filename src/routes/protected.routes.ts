import {
    DashboardPage,
    DashboardDiskPage,
    DashboardDomainsPage,
    DashboardSQLPage,
} from "../pages";

import { MdDashboard } from "react-icons/md";
import { FaFloppyDisk } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrDomain } from "react-icons/gr";

const ProtectedRoutes = [
    { path: "/dashboard", component: DashboardPage, icon: MdDashboard, name: "Dashboard" },
    { path: "/dashboard/disks", component: DashboardDiskPage, icon: FaFloppyDisk, name: "Disks" },
    { path: "/dashboard/sql", component: DashboardSQLPage, icon: BiLogoPostgresql, name: "SQL" },
    { path: "/dashboard/domains", component: DashboardDomainsPage, icon: GrDomain, name: "Domains" },
];

export default ProtectedRoutes;