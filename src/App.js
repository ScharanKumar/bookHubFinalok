import {Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Allbooks from "./components/Allbooks"
import Readbooks from "./components/Readbooks"
import Currentlyreadingbooks from "./components/Currentlyreadingbooks"
import Wanttoreadbooks from "./components/Wanttoreadbooks"
import Details from "./components/Details" 
import Details1 from "./components/Details1" 
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <ProtectedRoute exact path="/" component={Home}/>
      <ProtectedRoute exact path="/allBooks" component={Allbooks}/>
      <ProtectedRoute exact path="/yetToReadBooks" component={Readbooks}/>
      <ProtectedRoute exact path="/currentlyReadingBooks" component={Currentlyreadingbooks}/>
      <ProtectedRoute exact path="/wantToReadBooks" component={Wanttoreadbooks}/>
      <ProtectedRoute exact path="/detail/:id" component={Details} />
      <ProtectedRoute exact path="/detail/home/:id" component={Details1} />
    </Switch>
  );
}

export default App;
