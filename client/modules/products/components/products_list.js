import React from 'react';
import ProductsListItem from './products_list_item';

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { prods, deleteProduct, updateProduct } = this.props;

    return (
      <div className="col-sm-12">

        <a href="/products/add" className="btn btn-success">Add</a>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prods ? prods.map( (product) => (
              <ProductsListItem
                  key={product._id}
                  product={product}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
              />
            )) : 'no products yet'}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;
