import { Routes,Route } from 'react-router-dom';
import ThemeCustomization from './themes';
import Jaynth from './Jaynth';
import MainLayout from './layout/MainLayout';
import React from 'react';

const App = () => {

  return(
    <ThemeCustomization>
      <Routes>
        <Route  element={<MainLayout/>}>
          <Route path='/' element={<Jaynth/>}/>
        </Route>
      </Routes>
  </ThemeCustomization>
  )
}

export default App;
