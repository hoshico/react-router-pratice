import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Pgae2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={( match: ) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path=`${url}/detailA`>
                <Page1DetailA />
              </Route>
              <Route path=`${url}/detailB`>
                <Page1DetailB />
              </Route>
              <Page1 />
            </Switch>
          )}
        />

        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
