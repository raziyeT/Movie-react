import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import MovieForm from "./Components/MovieForm";
import NotFound from "./Components/NotFound";
import Rentals from "./Components/Rentals";
import Customers from "./Components/Customers";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies} />
          <Route path="/movieForm" component={MovieForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/rentals" component={Rentals} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;

//return(
//   <div>
//   <NavBar/>
//   <div className={content}
//   <Route path="/Products" component={Product}/>
//   <Route path="/Posts" component={Posts}/>
//   <Route path="/admin" component={Dashboard}/>
//   <Route path="/" exact    component={Home}/>
//   </div>
//);
