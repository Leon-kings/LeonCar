import { useState } from 'react'
import  styles from './Navbar.module.css';
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
          <a  className={`${styles.logo}`}> <b>Leon</b> </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>HOME</a>
            </li>
            <li onClick={removeActive}>
              <a href='/Service' className={`${styles.navLink}`}>SERVICES</a>
            </li>
        
            <li onClick={removeActive}>
              <a href='/NewFeatured' className={`${styles.navLink}`}>NEW</a>
            </li>
            <li onClick={removeActive}>
              <a href='/Branding' className={`${styles.navLink}`}>BRANDS</a>
            </li>
            <li onClick={removeActive}>
              <a href='/Contact-us' className={`${styles.navLink}`}>CONTACT</a>
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