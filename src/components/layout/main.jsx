import { Outlet } from "react-router-dom";
import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";


export default function Main(children) {
  return (
    <div>
      <Header></Header>
      <Outlet>{children}</Outlet>
      <Footer></Footer>
    </div>
  )
}