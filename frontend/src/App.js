import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import EditUserScreen from "./screens/EditUserScreen";
import ProductListScreen from "./screens/ProductListScreen";
import EditProductScreen from "./screens/EditProductScreen";
import OrderListScreen from "./screens/OrderListScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="bg-light py-3">
        <Container>
          <Switch>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/user" component={UserListScreen} />
            <Route path="/user/:id/edit" component={EditUserScreen} />
            <Route path="/admin/products" component={ProductListScreen} exact />
            <Route
              path="/admin/products/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route path="/admin/orders" component={OrderListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={EditProductScreen}
            />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/" component={HomeScreen} exact />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
