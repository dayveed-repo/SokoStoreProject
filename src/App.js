import './App.css';

// import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
// import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
// import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
// import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
// import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Header from './RouteComponents/Header';
import SidebarLeft from './RouteComponents/SidebarLeft';
import Feed from './RouteComponents/Feed';
import Footer from './RouteComponents/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetails from './RouteComponents/ProductDetails';
import MainBag from './RouteComponents/MainBag';
import Bag from './RouteComponents/Bag.js'
import OrderSuccess from './RouteComponents/OrderSuccess'
import Orders from './RouteComponents/Orders';
import Categories from './RouteComponents/Categories';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <div className="App_body">
              <SidebarLeft />
              <Feed />
              <Bag />
            </div>
          </Route>

          <Route path="/Product">
            <ProductDetails />
          </Route>

          <Route path="/Bag">
            <MainBag />
          </Route>

          <Route path="/OrderSuccess">
              <OrderSuccess />
          </Route>

          <Route path="/Orders">
              <Orders />
          </Route>

          <Route path="/Address">
            <Orders />
          </Route>

          <Route path="/Sections">
            <Categories />
          </Route>
          
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
