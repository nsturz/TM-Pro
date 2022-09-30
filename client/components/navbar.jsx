import React from 'react';

// we will need to come back to this at a later time 9/24/22:
// function Artist(props){
//   const { name } = props.artists;
//   return (
//     <li>
//       <a className="dropdown-item" href="#">
//       { name }
//       </a>
//     </li>
//   );
// };

export default class NavBar extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <nav className="navbar navbar-top navbar-expand-sm">
        <ul id="navbarSupportedContent">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Artist
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" />
          {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Artist
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div> */}
        </ul>
      </nav>
    );
  }
}
