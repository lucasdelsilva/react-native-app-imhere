import { Fragment } from "react";
import { StatusBarComponent } from "./src/components/StatusBar";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <Fragment>
      <StatusBarComponent />
      <Home />
    </Fragment>
  );
}