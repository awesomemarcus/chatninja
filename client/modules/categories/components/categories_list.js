import React from 'react';

import CategoriesListItem from './categories_list_item';

class CategoriesList extends React.Component{


  render() {

    const {categories,categoriesDelete} = this.props;

    return (
      <div>
        <h1>Categories List</h1>
        <a className="btn btn-default" href="/categories/add/" role="button">Add Category</a>
        <br />
        <br />
        <table className="table table-bordered">
            <thead>
                  <tr className="info">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Products</th>
                    <th>Actions</th>
                  </tr>
            </thead>

            <tbody>
              {categories ? categories.map( (category) => (
                <CategoriesListItem key={category._id} category={category} categoriesDelete={categoriesDelete}/>
              )) : 'no categories yet'}
            </tbody>

        </table>

      </div>
    );
  }
}

export default CategoriesList;
