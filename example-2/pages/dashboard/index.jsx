import Head from "next/head";
import { Home } from "../../components/Dashboard/home";
import { Navbar } from "../../components/Dashboard/navbar";
import { Sider } from "../../components/Dashboard/Sider";








export default function Dashboard() {
    return (
        <>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Sider />
                </div>
                <div className="col">
                    <Home />
                </div>
            </div>
          </div>
        </>
    )
}