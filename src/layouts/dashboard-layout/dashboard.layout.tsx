import React, { PropsWithChildren } from "react";

import styles from "./dashboard.module.css";

import { SidebarComponent, StatsComponent } from "../../components";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.dashboardLayoutContainer}>
        <div className={styles.dashboardLayoutSidebar}>
          <SidebarComponent />
        </div>
        <div className={styles.dashboardLayoutContent}>
          <div className={styles.dashboardLayoutStats}>
            <div className={styles.dashboardLayoutStatsChild}>
              <StatsComponent title="Gerencia Disk" result="95%" />
            </div>
            <div className={styles.dashboardLayoutStatsChild}>
              <StatsComponent title="Gerencia Disk" result="95%" />
            </div>
            <div className={styles.dashboardLayoutStatsChild}>
              <StatsComponent title="Gerencia Disk" result="95%" />
            </div>
            <div className={styles.dashboardLayoutStatsChild}>
              <StatsComponent title="Gerencia Disk" result="95%" />
            </div>
          </div>
          <div className={styles.dashboardLayoutPage}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
