import React, { useState } from 'react'
import './Signup.css'

const Signup = (props) => {
    const [form, setForm] = useState(1)
    const [userData, setUserData] = useState({
        email: "",
        first: "",
        last: ""
    })

    function next(event) {
        event.preventDefault()
        setForm(2)
    }

    function submitForm(event) {
        event.preventDefault()
        setForm(3)
    }

    console.log(userData)
    props.func(form)

    return (
        <form class="signup" onSubmit={submitForm} action="">
            {form === 1 &&
                <>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={userData.email || ""}
                        onChange={(e) => setUserData({ email: e.target.value })}
                    />
                    <button className="button" onClick={next} type="button">NEXT</button>
                    <div className="consent">
                        <input className="checkbox" type="checkbox" required />
                        <small>
                            I agree to receive information from Interactive Nerd in accordance with the following <a className="privacy-link" href="#">Privacy Policy</a>
                        </small>
                    </div>
                </>
            }

            {form === 2 &&
                <>
                    <div className="inputs">
                        <input
                            className="input"
                            type="text"
                            name="first"
                            placeholder="First Name"
                            value={userData.first || ""}
                            onChange={(e) => setUserData({ ...userData, first: e.target.value })}
                        />
                        <div className="spacer"></div>
                        <input
                            className="input"
                            type="text"
                            name="last"
                            placeholder="Last Name"
                            value={userData.last || ""}
                            onChange={(e) => setUserData({ ...userData, last: e.target.value })}
                        />
                    </div>
                    <button className="button" type="submit">SIGN UP</button>
                </>
            }

            {form === 3 &&
                <p className="closing">Look out for the latest news on your favorite shows.</p>
            }

        </form>
    )
}

export default Signup
