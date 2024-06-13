import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Router,Route} from 'react-router-dom'
import Main from "./components/Main/main"
import Login from './components/Login/Login';
import Occasions from './components/Occasion/Occasions';
import Gallery from './components/Gallery/Gallery';
import Bridal from './components/Bridal/Bridal';
import Model from './components/Model/Model';
import Others from './components/Others/Others';
import Contactus from './components/ContactUS/Contactus';
import Getstartedb from './components/Getstartedb/Getstartedb';
import Getstartedn from './components/Getstartedn/Getstartedn';
function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Login></Login>
    },
    {
      path:'main',
      element:<Main></Main>
    },{
      path:'occ',
      element:<Occasions></Occasions>
    },
    {
      path:'Gall',
      element:<Gallery></Gallery>
    },
    {
      path:'bridal',
      element:<Bridal></Bridal>
    },
    {
      path:'model',
      element:<Model></Model>
    },
    {
      path:'o',
      element:<Others></Others>
    },
    {
      path:'contact',
      element:<Contactus></Contactus>
    },
    {
      path:'get',
      element:<Getstartedb></Getstartedb>
    },
    {
      path:'getn',
      element:<Getstartedn></Getstartedn>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
