import React from 'react';
import * as help from '/client/global-helpers';

class ProductsListItem extends React.Component {

  handleDelete() {
    const {product,deleteProduct} = this.props;
    deleteProduct(product._id);
  }

  handleUpdate() {
    const {product,updateProduct} = this.props;
    updateProduct(product._id);
  }

  render() {

    const {product} = this.props;

    return (
      <tr>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.category.name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>{help.formatDate(product.createdAt)}</td>
        <td>
          <a href="#" className="btn btn-sm btn-danger" onClick={this.handleDelete.bind(this)}>
            Delete
          </a>&nbsp;
          <a href={`/products/update/${product._id}`} className="btn btn-sm btn-success">
            Edit
          </a>&nbsp;
          <a href={`/products/view/${product._id}`} className="btn btn-sm btn-default">
            view
          </a>
        </td>
      </tr>
    );
  }


}



export default ProductsListItem;
