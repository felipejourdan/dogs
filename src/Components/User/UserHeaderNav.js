import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPictures } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">
        <MyPictures />
        Minhas Fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Stats />
        Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        <AddPhoto />
        Adicionar foto
      </NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
