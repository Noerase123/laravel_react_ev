import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ListPage, CreateFormPage } from './pages';

function NavigatorBar() {
  return (
    <div className='bg-slate-300'>
      <div className="container mx-auto">
        <div className='flex flex-row justify-between items-center h-[50px]'>
          <p className='text-2xl'>
            Title - Test
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListPage />
    },
    {
      path: "/create",
      element: <CreateFormPage />
    },
  ]);
  

  return (
    <div>
      <NavigatorBar />
      <div className="container mx-auto mt-[50px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
