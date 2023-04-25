import { Outlet } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./Layout/GeneralLayout";
import Header from "./ui-components/Header";

function App() {
  return (
    <GeneralLayout>
      <Header />
      <Outlet />
    </GeneralLayout>
  );
}

export default App;
