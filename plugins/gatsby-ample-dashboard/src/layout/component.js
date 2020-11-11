import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../components/private-route"

import DashboardTemplate from "../views/dashboard"
import NotFound from "../views/not-found"
import LoginTemplate from "../views/login"
import TrainingTemplate from "../views/training"

import Header from "./header"

const Layout = () => {
  return (
    <div>
      <Header />

      <Router>
        <NotFound default />
        <PrivateRoute path="/admin" component={DashboardTemplate} />
        <PrivateRoute path="/admin/training" component={TrainingTemplate} />
        <LoginTemplate path="/admin/login" />
      </Router>
    </div>
  )
}

export default Layout
