import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../../components/private-route"

import LoginTemplate from "../login"
import TrainingTemplate from "../training"

const DashboardTemplate = () => {
  return (
    <div>
      <Router>
        <PrivateRoute path="/admin/training" component={TrainingTemplate} />
        <LoginTemplate path="/admin/login" />
      </Router>
    </div>
  )
}

export default DashboardTemplate
