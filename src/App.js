import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Utilities/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import StartQuiz from './Components/StartQuiz/StartQuiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/statistics',
          element: <Statistics/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/quizitem/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <StartQuiz/>
        }
      ]
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
