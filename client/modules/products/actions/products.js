import {ProductSchem} from '/lib/collections/products';

export default {
  validateProdName({LocalState},name) {
    let formData = {
      name: name,
    }
    let validateProdName = ProductSchem.namedContext("myContext").validateOne(formData, "name");
    if(validateProdName === false) {
      document.getElementById('prodName').style.border = '1px solid red';
      document.getElementById('nameErrorMsg').style.color = 'red';
      document.getElementById('nameErrorMsg').innerHTML = 'Product name should be min of 3 and max of 10 characters.';
    }

    if(validateProdName === true) {
      document.getElementById('prodName').style.border = '1px solid green';
      document.getElementById('nameErrorMsg').style.color = 'green';
      document.getElementById('nameErrorMsg').innerHTML = 'good';
    }
  },

  validateProdDescription({LocalState},description) {
    let formData = {
      description: description,
    }
    let validateDescpt = ProductSchem.namedContext("myContext").validateOne(formData, "description");
    if(validateDescpt === false) {
      document.getElementById('prodDescription').style.border = '1px solid red';
      document.getElementById('descriptionErrorMsg').style.color = 'red';
      document.getElementById('descriptionErrorMsg').innerHTML = 'Description should be min of 10 and max of 100 characters.';
    }

    if(validateDescpt === true) {
      document.getElementById('prodDescription').style.border = '1px solid green';
      document.getElementById('descriptionErrorMsg').style.color = 'green';
      document.getElementById('descriptionErrorMsg').innerHTML = 'Good';
    }
  },

  validateProdPrice({LocalState},price) {
    let formData = {
      price: Number(price),
    }
    let validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");
    if(validatePrice === false) {
      document.getElementById('prodPrice').style.border = '1px solid red';
      document.getElementById('priceErrorMsg').style.color = 'red';
      document.getElementById('priceErrorMsg').innerHTML = 'Price must be a number';
    }

    if(validatePrice === true) {
      document.getElementById('prodPrice').style.border = '1px solid green';
      document.getElementById('priceErrorMsg').style.color = 'green';
      document.getElementById('priceErrorMsg').innerHTML = 'Good';
    }
  },

  add({LocalState},category_id, name, description, price) {
    if(!name || !description || !price) {
      LocalState.set('PRODUCTS_ADD_NAME_ERROR', 'Product name is required.');
      LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', 'Product description is required.');
      LocalState.set('PRODUCTS_ADD_PRICE_ERROR', 'Product price is required.');
      return;
    }

    Meteor.call("insertProduct", category_id, name, description, price, function (err) {
      if(err) {
        return LocalState.set('PRODUCTS_ADD_ERROR', 'Failed to Add Product');
      }
    });
  },

  deleteProduct({LocalState}, id) {
    Meteor.call("deleteProduct", id, function (err) {
      if(err) {
        return LocalState.set('PRODUCTS_ADD_ERROR', 'Unable to delete product.');
      }
    });
  },

  updateProduct({LocalState,FlowRouter}, category_id, name, description, price) {
    var id = FlowRouter.current().params.productId;
    Meteor.call("updateProduct", id, category_id, name, description, Number(price), function (err) {
      if(err) {
        return LocalState.set('PRODUCTS_UPDATE_ERROR', 'Unable to update product.');
      }
    });
  },
}
