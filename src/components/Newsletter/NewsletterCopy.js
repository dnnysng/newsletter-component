import { useState } from "react";

import SignupForm from "./SignupForm";

import style from "./Newsletter.module.css";

export default function NewsletterCopy() {
    const [step, setStep] = useState(1);
    const instruction = [
        "Sign up for the IN-Dex newsletter!",
        "Almost done! Enter you first and last name!",
        "Thank you for signing up!",
    ];
    return (
        <div className={style.container}>
            <span className={style.title}>{step === 3 ? "congratulations" : "join the list"}</span>
            <div className={style.signup}>
                <span className={style.instruction}>{instruction[step - 1]}</span>
                {step === 3 && <p className={style.text}>Look out for the latest news on your favorite tech!</p>}
                <SignupForm step={step} setStep={setStep} />
            </div>
        </div>
    );
}
