import "antd/dist/antd.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartSCreen from "./component/screen/CartScreen/CartSCreen"
import HeaderView from "./component/screen/HeaderView";
import HomeScreen from "./component/screen/Product/HomeScreen"
function App() {
  return (
    <div>

      <BrowserRouter>
      <HeaderView />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/store" component={CartSCreen} />
        </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
