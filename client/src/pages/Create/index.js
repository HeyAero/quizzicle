import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { CreateForm } from '../../components';
import { GameRoom } from '../../layout';

const Lobby = () => {
  const history = useHistory();

  const createRoom = async () => {
      try {
          let { data } = await axios.post("http://localhost:3000/games"); // Change this once server is deployed
          console.log(data);
          history.push(`/game/${data}`)     
      } catch (err) {
          console.warn(err);
      }
  }

  return (
    <main id="create" className="container">
      <CreateForm createRoom={createRoom}/>
    </main>
  );
};

export default Lobby;