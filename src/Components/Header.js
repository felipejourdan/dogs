import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';


const Header = () => {
  const { data } = React.useContext(UserContext);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout()
 }
  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          
          <div className={styles.login}>Bem-vindo {data.username}
          <button onClick={handleLogout} >Sair</button>
          </div>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
