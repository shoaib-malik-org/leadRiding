import { useState } from "react"







export default function Forget() {
    var [codeChk, setCodeChk] = useState(false)
    var [email, setEmail] = useState('')
    var [otp, setOtp] = useState('')
    function submit(e) {
        e.preventDefault();
        fetch('http://localhost:8000/auth/forget', { method: 'POST', body: JSON.stringify({ username: email }) })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCodeChk(data)
            })
    }
    function otpChk(e) {
        e.preventDefault();
        fetch('http://localhost:8000/auth/optVerification', { method: 'POST', body: JSON.stringify({ otp, }) })
            .then((res) => res.json())
            .then((data) => {

                console.log(data)
                setCodeChk(data)

            })
    }
    return (
        <>


            <form onSubmit={submit}>
                <input type="text" placeholder="username" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="submit" />
            </form>

            <form onSubmit={otpChk}>
                <input type="number" onChange={(e) => { setOtp(e.target.value) }} value={otp} />
                <input type="submit" />
            </form>

        </>
    )
}