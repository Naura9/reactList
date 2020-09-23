import React from 'react';
import './App.css';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(   
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top"> */}
          {/* <a class="navbar-brand text-white mt-10">REACT ROUTER DOM</a> */}
              <Link to="/">Beranda</Link> |
              <Link to="/tentangsaya">Tentang Saya</Link> |
              <Link to="/karya">Karya</Link> |
              <Link to="/kontak">Kontak</Link> |
              <Link to="/list">List</Link> 
        {/* </nav> */}
        <p><Utama /></p>

      </div>

    );
  }
}

export default App;
