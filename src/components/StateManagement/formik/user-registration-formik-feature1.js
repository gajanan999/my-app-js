import React from 'react';
import { observer, inject } from 'mobx-react';
import { useFormik } from 'formik';
//import * as Yup from 'yup';
//import  userStore  from './formik-store';

const UserRegistrationForm = inject('userStore')(observer(({props}) => {
  const { userStore } = props;

  console.log(props)

  const formik = useFormik({
    initialValues: userStore.formValues,
    //validationSchema: userStore.validationSchema,
    onSubmit: async (values) => {
      try {
        await userStore.register(values.username, values.email, values.password);
        userStore.setFormValues(formik.values);
        //formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log(formik)
  // React.useEffect(() => {
  //   userStore.setValidationSchema(Yup.object({
  //     username: Yup.string().required('Required'),
  //     email: Yup.string().email('Invalid email address').required('Required'),
  //     password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
  //     confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  //   }));
  // }, [userStore]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
      
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input id="confirmPassword" name="confirmPassword" type="password" onChange={formik.handleChange} value={formik.values.confirmPassword} />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
      
      <button type="submit">Submit</button>
    </form>
  );
}));

export default UserRegistrationForm;
