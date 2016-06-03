import React from 'react';

import {NavBarLogOut} from './nav_bar';
import NavBar from '../containers/nav_bar';


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
