import { Routes,Route } from 'react-router-dom';
// import MainLayout from 'layout/MainLayout/index';
import ThemeCustomization from './themes';
// import Jaynth from './Jaynth';
import MainLayout from './layout/MainLayout';

const App = () => {

  return(
    <ThemeCustomization>
      <MainLayout/>
  </ThemeCustomization>
  )
}

export default App;
