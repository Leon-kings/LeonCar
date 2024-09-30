import { useState } from 'react'
import  styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <Link  className={`${styles.logo}`}> <b>Leon</b> </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>HOME</a>
            </li>
            <li onClick={removeActive}>
              <Link to={'/Service'} className={`${styles.navLink}`}>SERVICES</Link>
            </li>
        
            <li onClick={removeActive}>
              <Link to={'/NewFeatured'} className={`${styles.navLink}`}>NEW</Link>
            </li>
            <li onClick={removeActive}>
              <Link to={'/Branding'} className={`${styles.navLink}`}>BRANDS</Link>
            </li>
            <li onClick={removeActive}>
              <Link to={'/Contact-us'} className={`${styles.navLink}`}>CONTACT</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;