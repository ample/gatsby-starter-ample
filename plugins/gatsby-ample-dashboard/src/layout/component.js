import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../components/private-route"

import DashboardView from "../views/dashboard"
import NotFound from "../views/not-found"
import LoginView from "../views/login"
import TrainingView from "../views/training"
import SitemapView from "../views/sitemap"

import Header from "./header"

import "./global.scss"

const Layout = () => {
  return (
    <div>
      <Header />

      <Router>
        <NotFound default />
        <PrivateRoute path="/admin" component={DashboardView} />
        <PrivateRoute path="/admin/training" component={TrainingView} />
        <PrivateRoute path="/admin/sitemap" component={SitemapView} />
        <LoginView path="/admin/login" />
      </Router>
    </div>
  )
}

export default Layout
