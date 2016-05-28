import React from 'react';

class CategoriesView extends React.Component {
  render() {
    const {category} = this.props;
    return (
      <div>
        <h1>
            {category.name}
        </h1>
        <h2>
          {category.details}
        </h2>
        <h3>
          {Date(category.createdAt)}
        </h3>
        <a className="btn btn-primary " href="/categories/list/" role="button">back</a>
      </div>
    );
  }
}

export default CategoriesView ;
