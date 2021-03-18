
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/PorductDetail/ProductDetail';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}



function App() {
  return (

    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory"> 
            <Inventory></Inventory>
          </Route>
          <Route path="/shipment"> 
            <Shipment></Shipment>
          </Route>
          <Route path="/login"> 
            <Login></Login>
          </Route>
        <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
