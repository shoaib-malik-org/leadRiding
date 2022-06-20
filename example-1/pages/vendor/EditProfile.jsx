
import { Navbar } from "../../components/common/navbar"
import { VendorNav } from "../../components/vendor/vendorNav"
import { EditProf } from "../../components/vendor/EditProf"


export async function getServerSideProps({ req }) {
    const p = await fetch('http://localhost:8000/vendorInfo/single', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            cookie: req.headers.cookie
        },
        credentials: "include"
    })
    const data = await p.json();
    return {
        props: {
            data
        }
    }
}


export default function EditProfile({ data }) {
    return (
        <>
            <Navbar />
            <VendorNav />
            <EditProf data={data} />
        </>
    )
}