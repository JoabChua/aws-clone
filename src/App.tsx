import { Route, Redirect, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const auth = localStorage.getItem("auth");
  //   if (auth === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = () => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("auth", "1");
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("auth");
  // };

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Landing />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="*">
            <Redirect to="/" exact={true} />
          </Route>
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
