import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => this.setState({cats: payload}))
    .catch(errors => console.log("Cat read errors:", errors))
  }

  createCat = (newlyCreatedCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newlyCreatedCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat create errors:", errors))
  }

  updateCat = (newlyUpdatedCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(newlyUpdatedCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat update errors:", errors))
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat delete errors:", errors))
  }

  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />}
          />
          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = +props.match.params.id
              let cat = this.state.cats.find(catObject => catObject.id === id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }}
          />
          <Route
            path="/catedit/:id"
            render={(props) => {
              let id = +props.match.params.id
              let cat = this.state.cats.find(catObject => catObject.id === id)
              return <CatEdit cat={cat} updateCat={this.updateCat} />
            }}
          />
          <Route
            path="/catnew"
            render={() => {
              return <CatNew createCat={this.createCat} />
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
