
import { getCookies } from 'cookies-next'



export async function getServerSideProps() {
    const p = await fetch('http://localhost:8000/auth/auth/check',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                // "Access-Control-Allow-Credentials": true,

            },
            credentials: "include"
        })
    const res = await p.json();
    return {
        props: {
            res
        }
    }
}

export default function Auth({ res }) {
    // fetch('http://localhost:8000/auth/auth/check', {
    //     method: 'GET',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "http://localhost:3000/",
    //         // "Access-Control-Allow-Credentials": true,

    //     },
    //     credentials: "include"
    // })
    // .then((res)=>res.json())
    // .then((chk)=>{console.log(chk)})
    return (
        <>
            {
                (res) ?
                    <h1>you are authenticated</h1>
                    :
                    <h1>you are not authenticated</h1>
            }
        </>
    )
}