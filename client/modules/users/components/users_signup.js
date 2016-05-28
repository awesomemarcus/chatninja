import React from 'react';

class UsersSignup extends React.Component {
  render() {
    const  {errorField} = this.props;
    return(
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">

          <h2>User Signup</h2>
          {errorField.error ? <p  style={{color: 'red'}}>{errorField.error}</p> : null}
          <form className="form-horizontal" onSubmit={this.userSignup.bind(this)}>
            <div className={this.getInputWrapperClass(errorField.email)}>

              <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" name="email" ref="email" className="form-control" id="inputEmail3" onBlur={this.validateField.bind(this)} placeholder="Email" />
                {errorField.email ? <p style={{color: 'red'}}>{errorField.email}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.password)}>
              <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" name="password" ref="password" className="form-control" id="inputPassword3" onBlur={this.validateField.bind(this)} placeholder="Password" />
                {errorField.password ? <p style={{color: 'red'}}>{errorField.password}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.username)}>
              <label for="inputUsername" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" name="username" ref="username" className="form-control" id="inputUsername" onBlur={this.validateField.bind(this)} placeholder="Username" />
                {errorField.username ? <p style={{color: 'red'}}>{errorField.username}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.firstname)}>
              <label for="inputFirstname" className="col-sm-2 control-label">Firstname</label>
              <div className="col-sm-10">
                <input type="text" name="firstname" ref="firstname" className="form-control" id="inputFirstname" onBlur={this.validateField.bind(this)} placeholder="Firstname" />
                {errorField.firstname ? <p style={{color: 'red'}}>{errorField.firstname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.lastname)}>
              <label for="inputLastname" className="col-sm-2 control-label">Lastname</label>
              <div className="col-sm-10">
                <input type="text" name="lastname" ref="lastname" className="form-control" id="inputLastname" onBlur={this.validateField.bind(this)} placeholder="Lastname" />
                {errorField.lastname ? <p style={{color: 'red'}}>{errorField.lastname}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.gender)}>
              <label for="selectGender" className="col-sm-2 control-label">Gender</label>
              <div className="col-sm-10">
                <select className="form-control" name="gender" id="selectGender" onBlur={this.validateField.bind(this)} ref="gender">
                  <option value>- select gender -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errorField.gender ? <p style={{color: 'red'}}>{errorField.gender}</p> : null}
              </div>
            </div>
            <div className={this.getInputWrapperClass(errorField.age)}>
              <label for="selectAge" className="col-sm-2 control-label">Age</label>
              <div className="col-sm-10">
                <select className="form-control" id="selectAge" name="age" onBlur={this.validateField.bind(this)} ref="age">
                  <option value>- select age -</option>
                  {this.getAgeOptions()}
                </select>
                {errorField.age ? <p style={{color: 'red'}}>{errorField.age}</p> : null}
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-lg btn-block btn-success">SUBMIT</button>
              </div>
              <div className="col-sm-offset-2 col-sm-10" style={{marginTop: '5px'}}>
                <a href="/users/login" className="btn btn-lg btn-block btn-default">LOGIN</a>
              </div>
            </div>
            </form>
          </div>
      </div>
    );
  }

  userSignup(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {userSignup} = this.props;
    const {email,password,lastname,firstname,gender,username,age} = this.refs;

    const formData = {
      "emails.$.address" : email.value,
      password : password.value,
      "profile.username" : username.value,
      "profile.firstname" : firstname.value,
      "profile.lastname" : lastname.value,
      "profile.gender" : gender.value,
      "profile.age" : parseInt(age.value),
      modifiedAt : new Date(),
      createdAt : new Date(),
    }

    userSignup(formData);
  }

  getAgeOptions(){
    const ageOptions = [];

    for (let minAge = 18; minAge <= 99; minAge++) {
      ageOptions.push({age: minAge});
    }

    return ageOptions.map((a) => (
      <option value={a.age}>{a.age}</option>
    ));
  }

  clearError(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {clearErrors} = this.props;
    clearErrors();
  }


  getInputWrapperClass(errorObj) {
    var classes = 'form-group';

    if (errorObj) {
      classes = 'form-group has-error';
    }


    return classes;

  }

  validateField(event) {
    if(event && event.preventDefault){
      const {validateInputField} = this.props;

      const fieldName = event.currentTarget.name;
      let fieldValue = event.currentTarget.value;

      if(fieldName === 'age') {
        fieldValue = parseInt(event.currentTarget.value);
      }

      validateInputField(fieldName, fieldValue);
    }
  }

}


export default UsersSignup;
