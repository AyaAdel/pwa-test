import React from "react";
import useIsIOS from "./useIsIOS";
import {InstallPWA} from "./InstallPWA";

function App() {

  const { prompt } = useIsIOS();

  return (
    <>
      <h1>Hello PWA</h1>
      <InstallPWA />
    </>
  )
}
export default App;
