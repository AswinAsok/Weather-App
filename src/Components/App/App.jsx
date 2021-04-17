
import Header from '../Header/Header';
import Display from '../Display/Display'
import './App.css';
import Search from '../Search/Search';
import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';

function App() {

  const[location, setLocation] = useState('')
  const[search, setSearch] = useState(false)

  return (
    <div className="App">
      <Header />
      <Search location={location} setLocation={setLocation} search={search} setSearch={setSearch}/>
      <br></br>
      <Divider />
      <Display location={location} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
