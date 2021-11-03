import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Service from './components/Service/Service';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MyOrder from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import initializeFirebase from './components/Firebase/firebase.init';
import AddUsers from './components/AddUsers/AddUsers';
import Users from './components/Users/Users';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './components/Context/AuthProvider';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import ManageServices from './components/ManageServices/ManageServices';
import Banner from './components/Banner/Banner';


initializeFirebase();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            <Route path="/sdetails/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route exact path="/mServices">
              <ManageServices></ManageServices>
            </Route>
            <Route exact path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/adduser">
              <AddUsers></AddUsers>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/banner">
              <Banner></Banner>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
