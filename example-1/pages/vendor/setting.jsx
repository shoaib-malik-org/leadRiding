import { Navbar } from "../../components/common/navbar";
import { createContext } from 'react';
import { VendorNav } from "../../components/vendor/vendorNav";
import { AccSetting } from "../../components/vendor/setting";



// export async function getServerSideProps({ req }) {
//     const p = await fetch('http://localhost:8000/auth/check',
// {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "http://localhost:3000/",
//         cookie: req.headers.cookie
//     },
//     credentials: "include"
// })
//     const res = await p.json();
//     return {
//         props: {
//             res
//         }
//     }
// }





export default function Setting() {
    return (
        <>
            <Navbar />
            <VendorNav />
            <AccSetting />
        </>
    )
}