import { Link } from "wouter";

import styles from "./sidebar.module.css";
import { ProtectedRoutes } from "../../routes";

const SidebarComponent = () => {
  return (
    <div className={styles.sidebarComponentContainer}>
      <div className={styles.sidebarComponentHead}>
        <div className={styles.sidebarComponentHeadImg}>
          <img src="/profile/1.jpg" alt="Profile" />
        </div>
        <div className={styles.sidebarComponentHeadUserDetails}>
          <span>John Doe</span>
          <span>johndoe@example.com</span>
        </div>
      </div>
      <hr />
      <div className={styles.sidebarComponentNav}>
        <span>menú</span>
        <div className={styles.sidebarComponentNavList}>
          {ProtectedRoutes.map(({ path, icon: Icon, name }) => (
            <div className={styles.sidebarComponentNavListItem}>
              <Link
                className={styles.sidebarComponentNavListItemLink}
                href={path}
              >
                <Icon />
                <span>{name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
