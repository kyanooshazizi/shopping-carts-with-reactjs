

import Wrapperproduct from "./component/Wrapperproduct";
import {Switch, Route,Redirect} from "react-router-dom";
import Detailproduct from "./component/Detailproduct";
import Getapi from "./component/Getapi";
import UseReducer from "./component/UseReducer";
import Navbar from "./component/Navbar";
import Wrappershoping from "./component/Wrappershoping";
function App() {
  return (
   <Getapi>
    <UseReducer>
    <Navbar/>
    <Switch>
     <Route path="/products/:id" component={Detailproduct}/>
     <Route path="/products" component={Wrapperproduct}/>
     <Route path="/shopping" component={Wrappershoping}/>
     <Redirect  to="/products" />
    </Switch>
    </UseReducer>
  </Getapi>
  )

}

export default App;
