// project import
import ThemeCustomization from 'themes';
import { Routes,Route } from 'react-router-dom';
import Jayanth from 'Jayanth';
import MainLayout from 'layout/MainLayout/index';
import NewJay from 'NewJay';

const App = () => {

  return(
    <ThemeCustomization>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Jayanth/>}/>
          <Route path='/app' element={<NewJay/>}/>
        </Route>
      </Routes>
  </ThemeCustomization>
  )
}

export default App;
