import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				index: true,
// 				element: <SecSingup />,
// 			},
// 			{
// 				path: '/singup',
// 				element: <SecSingup />,
// 			},
// 			{
// 				path: '/login',
// 				element: <SecLogin />,
// 			},
// 		]
// 	},
// 	{
// 		path: 'about',
// 		element: <About />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				index: true, element: <p>Oii</p>,
// 			},
// 			{
// 				path: 'about/a',
// 				element: <p>Olá</p>,
// 			},
// 		]
// 	},
// 	{
// 		path: 'error',
// 		element: <ErrorPage />,
// 	}
// ])

// createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)