import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '../inputs/Input'
import Checkbox from '../inputs/Checkbox'
import NextButton from './NextButton'

import style from './SignupForm.module.css'

export default function SignupForm({ step, setStep }) {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false,
      }}
      validationSchema={
        step === 1 ?
          Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Email required!'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'Must accept terms!'),
          }) :
          Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setStep(3)
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={style.form}>

        {step === 1 &&
          <>
            <div className={style.container}>
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter Email Address"
              />

              <NextButton setStep={setStep} />
            </div>

            <Checkbox name="acceptedTerms">
              I agree to recieve information from Interactive Nerd in accordance with the following privacy policy.
            </Checkbox>
          </>
        }

        {step === 2 &&
          <>
            <div className={style.container}>
              <TextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <TextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />

              <button className={style.button} type="submit">Sign Up</button>
            </div>
          </>
        }

      </Form>
    </Formik>
  )
}