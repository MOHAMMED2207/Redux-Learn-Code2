import React from "react";
// import Loding from "./dist/Loding";
// const All_Layzz = React.lazy(() => import("../src/dist/All"));
import HomeConect from "./Components/HomeConect.jsx";
import HomeHooks from "./Components/HomeHooks.jsx";
import ItemsData from "./Components/ItemsData";

const App = () => {
  return (
    <>
      {/* <React.Suspense fallback={<Loding />} > */}
      {/* <All_Layzz />7 */}
      {/* </React.Suspense> */}
      {/* <ItemsData caks /> */}
      {/* <ItemsData cak />  */}
      ========================================
      <HomeConect />
      ========================================
      {/* <HomeHooks /> */}
    </>
  );
};

export default App;
