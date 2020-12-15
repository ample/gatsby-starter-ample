import React from "react"

import styles from "./styles.module.scss"

const DashboardView = () => {
  return (
    <div className={styles.dashboard_view}>
      <div className={styles.intro}>
        <h1>Dashboard</h1>
        <p>
          Welcome to your website dashboard. It is a peak behind the curtain. It's here to help you
          manage this awesome web experience you own.
        </p>
      </div>
    </div>
  )
}

export default DashboardView
