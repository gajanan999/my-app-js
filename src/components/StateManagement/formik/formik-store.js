import { observable, makeObservable, action } from 'mobx';

export class UserStoreImpl {
  formValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  validationSchema = {};

  
  constructor() {
    console.log('store is initializing...')
        makeObservable(this, {
            formValues: observable,
            validationSchema: observable,
            register: action,
            setFormValues: action
        });
    }



  setFormValues = (values) => {
    this.formValues = values;
  };

  setValidationSchema = (schema) => {
    this.validationSchema = schema;
  };

  async register(username, email, password) {
    // your registration logic here
  }


}

const  userStore = new UserStoreImpl();

export default userStore;

