import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { Header } from '../Components/Header';
import {NewEnveloppes} from '../Components/NewEnveloppe'
import { Home } from '../Components/Home';
import { EnveloppeDetail } from '../Components/EnveloppeDetail';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element = {<Header/>} >
      <Route path='/' element = {<Home/>} />
      <Route path='/:category' element = {<EnveloppeDetail/>}/>
      <Route path = '/newEnveloppe' element = {<NewEnveloppes />}/>

  </Route>

))
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
