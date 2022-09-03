import { useField } from 'formik'

import style from './Input.module.css'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={style.inputWrapper}>
      <label className={style.hidden} htmlFor={props.id || props.name}>{label}</label>
      <input className={style.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput