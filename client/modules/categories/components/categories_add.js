import React from 'react';

class CategoriesAdd extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const {categoriesAdd} = this.props;
    const {name} = this.refs;

    categoriesAdd({'name': name.value});

    // let formData = {
    //   catgory_id: "3543534534",
    //   name: "Prod Name",
    //   description: "Sample Details",
    //   price: 24,
    //   createdAt: new Date(),
    //   modifiedAt: new Date(),
    // };
    //
    // validateCatId = ProductSchem.namedContext("myContext").validateOne(formData, "catgory_id");
    // if(validateCatId ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // validateName = ProductSchem.namedContext("myContext").validateOne(formData, "name");
    // if(validateName ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // validateDescription = ProductSchem.namedContext("myContext").validateOne(formData, "description");
    // if(validateDescription ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");
    // if(validatePrice ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // validateCreatedAt = ProductSchem.namedContext("myContext").validateOne(formData, "createdAt");
    // if(validateCreatedAt ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // validateModifiedAt = ProductSchem.namedContext("myContext").validateOne(formData, "modifiedAt");
    // if(validateModifiedAt ===  false) {
    //   console.log(check(formData, ProductSchem));
    // }
    //
    // isValid = ProductSchem.namedContext("myContext").validate(formData);
    // if(isValid ===  true) {
    //   console.log('call action');
    //   // categoriesAdd(formData);
    // }

  }

  render() {
    const {
      nameError,
    } = this.props;
    return (
      <div className="col-sm-4">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <h3>Category Add</h3>
          </div>

          <div className="form-group">
            <label for="categoryName">Name</label>
            <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" />
            <p className="error text-error">{nameError ? nameError : ''}</p>
          </div>

          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    );
  }

}

export default CategoriesAdd;
