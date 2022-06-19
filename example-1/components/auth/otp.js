import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { firebase } from "../components/firebase"
import { RecaptchaVerifier } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home({ number }) {

  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: ""
  })
  useEffect(() => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  }, [])

  function onSignInSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    console.log(formData)
    const phoneNumber = "+91" + number;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log(window.confirmationResult);
        // ...
      }).catch((error) => {
        grecaptcha.reset(window.recaptchaWidgetId);
        console.log("Error; SMS not sent");
        // ...
      });
  }

  function submitOtp(e) {
    e.preventDefault();
    confirmationResult.confirm(formData.otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      console.log(error)
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  return (
    <>
      <form onSubmit={onSignInSubmit}>
        <div id={"sign-in-button"}></div>
        <h1>Get Otp</h1>
        <label>Phone Number</label>
        <input type={"text"} name={"number"} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} ></input>
        <input type={"submit"} ></input>
      </form>
      <form onSubmit={submitOtp}>
        <h1>Submit Otp</h1>
        <label>Enter OTP</label>
        <input type={"text"} name={"otp"} onChange={(e) => setFormData({...formData, otp: e.target.value})} value={formData.otp}></input>
        <input type={"submit"} ></input>
      </form>
    </>
  )
}
