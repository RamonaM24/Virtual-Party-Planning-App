import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">Welcome to the:</h1>
        <h2 className="home-subtitle">Virtual Party Planning Application</h2>
      </div>
    </div>
  );
};

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Virtual Party Planning</h1>
//       {/* <nav>
//         <ul>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/register">Register</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </ul>
//       </nav> */}
//     </div>
//   );
// };

export default Home;
