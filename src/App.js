
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Component/Routes';
import AddToCart from './Component/Pages/AddToCart/AddToCart';



function App() {
  
  return (
    <div className="relative">
      <RouterProvider router = {router}/>
      <Toaster></Toaster>
        <AddToCart/>
    </div>
  );
}

export default App;
