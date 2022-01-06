import { createTheme, ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Error from "./Pages/components/Error/Error";
import PrivateRoute from "./Pages/components/Shared/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AllBicycles from "./Pages/Explore/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Order from "./Pages/Order/Order";
import Register from "./Pages/Register/Register";

const theme = createTheme({
  typography: {
    fontFamily: "BerlinSansFBDemiBold",
  },
  palette: {
    primary: {
      main: "#1d1d1d",
    },
  },
});

// initializing animaiton on scroll
AOS.init({
  duration: 1500,
  delay: 80,
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/explore">
                <AllBicycles />
              </Route>
              <PrivateRoute path="/bicycles/:id">
                <Order />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
