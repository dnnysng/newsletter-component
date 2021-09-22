import React, { useState } from 'react'
import Signup from './Signup/Signup'
import './Newsletter.css'

const Newsletter = () => {

    const [form, setForm] = useState(1)

    const pull_data = (data) => { setForm(data) }

    return (
        <div className="newsletter">
            {form === 3 ? <h1 className="newsletter--title">congratulations!</h1> : <h1 className="newsletter--title">join the list</h1>}
            <div className="newsletter-right">
                {form === 1 && <h3 className="newsletter--subtitle">SIGN UP FOR <br className="next-line" />THE IN-Dex NEWSLETTER</h3>}
                {form === 2 && <h3 className="newsletter--subtitle">ALMOST DONE! PLEASE ENTER <br className="next-line" />YOUR FIRST AND LAST NAME</h3>}
                {form === 3 && <h2 className="newsletter--closing">Thank You For <br className="next-line" />Signing Up</h2>}

                <Signup func={pull_data} />
            </div>
        </div>
    )
}

export default Newsletter
