import { Outlet } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./Layout/GeneralLayout";
import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";

function App() {
  return (
    <GeneralLayout>
      <Header />
      <Outlet />
    </GeneralLayout>
  );
}

export default App;
