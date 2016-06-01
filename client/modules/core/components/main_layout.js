import React from 'react';

import NavBar , {NavBarLogOut} from './nav_bar';



class Layout extends React.Component {
  render() {
    const {content,userId} = this.props;
    return (
      <div>
        {userId ?   <NavBar /> :   <NavBarLogOut /> }
        {content()}
      </div>

    );
  }
}

export default Layout;
