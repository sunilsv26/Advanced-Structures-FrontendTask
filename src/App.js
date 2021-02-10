
import "./App.css";
import HomePage from "./homePage/homePage";
import Auth from "./auth/auth";
import { Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      {
        <Route
          path="/"
          component={localStorage.getItem("token") !== null ? HomePage : Auth}
        />
      }
    </div>
  );
};

export default App;
