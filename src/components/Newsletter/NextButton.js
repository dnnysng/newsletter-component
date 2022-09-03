import { useFormikContext } from 'formik'

import style from './NextButton.module.css'

export default function NextButton({ setStep }) {

  const { validateForm } = useFormikContext()

  async function handleNext() {
    const formErrors = await validateForm()
    if (!Object.keys(formErrors).length) setStep(2)
  }
  return (
    <button className={style.button} onClick={handleNext} type="button">Next</button>
  )
}