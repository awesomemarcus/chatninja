import React from 'react';

class ProductsUpdate extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {updateProduct} = this.props;
    const {
      category_id,
      name,
      description,
      price,
    } = this.refs;

    updateProduct(category_id.value,name.value,description.value,price.value);

  }

  render() {
    const {
        product,
        categories,
        nameError,
        descriptionError,
        priceError,
    } = this.props;

    return (
      <form className="form-horizontal col-sm-4" role="form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <div className="col-sm-10">
            <h3>Update Product</h3>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Choose Category</label>
          <div className="col-sm-10">
            <select className="selectpicker form-control" ref="category_id">
              {categories ? (categories.map((cat)=>(
                <option key={cat._id}
                  value={cat._id}
                >{cat.name}</option>
              ))) : <option>No categories</option>}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref="name" defaultValue={product.name}/>
            <p className="error text-error">{nameError ? nameError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="3" ref="description" defaultValue={product.description}></textarea>
            <p className="error text-error">{descriptionError ? descriptionError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" ref="price" placeholder="(i.e) $10.00" step="0.01" defaultValue={product.price}/>
            <p className="error text-error">{priceError ? priceError : ''}</p>
          </div>
        </div>

        <div className="form-group pull-right">
          <div className="col-sm-10">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>

      </form>
    );
  }
}

export default ProductsUpdate;
