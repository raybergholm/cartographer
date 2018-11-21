import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MapContainer from "./pages/MapContainer";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MapContainer} />
      <Route path="/map/:nodeId" component={MapContainer} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
