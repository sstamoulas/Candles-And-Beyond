import React from 'react'
import { Switch, Route } from "react-router-dom"

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import HomePage from './pages/home-page/home-page.component'
import AboutPage from './pages/about-page/about-page.component'
import ProductsPage from './pages/products-page/products-page.component'
import FAQsPage from './pages/faqs-page/faqs-page.component'


import './App.styles.scss'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/faq">
            <FAQsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default App
