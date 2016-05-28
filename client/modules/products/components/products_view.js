import React from 'react';

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product} = this.props;

    return (
      <form className="form-horizontal col-sm-4" role="form">

        <div className="form-group">
          <div className="col-sm-10">
            <h3>View Product Info</h3>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Category</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={product.category_id} disabled/>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={product.name} disabled/>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="3" value={product.description} disabled></textarea>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" value={product.price} placeholder="(i.e) $10.00" step="0.01" disabled/>
          </div>
        </div>

        <div className="form-group pull-right">
          <div className="col-sm-10">
            <a href="/products/list" className="btn btn-primary">Back</a>
          </div>
        </div>

      </form>
    );
  }
}

export default ProductsView;
