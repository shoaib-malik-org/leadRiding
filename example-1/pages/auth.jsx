
import { getCookies } from 'cookies-next'



export async function getStaticProps() {
    
    const p = await fetch('http://localhost:8000/auth/check',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                
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
    console.log(res)
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