import { useField } from 'formik';

import style from './Checkbox.module.css'

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={style.terms}>
      <input className={style.checkbox} type="checkbox" {...field} {...props} />
      <small className={style.small}>
        {children}
      </small>
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Checkbox