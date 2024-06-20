import { RouterProvider } from 'react-router-dom'
import { router } from './routes/route'
import { BackgroundTaskProvider } from './context/BackgroundTask.context'
import './App.css'

function App() {

  return (
    <BackgroundTaskProvider>
      <RouterProvider router={router} />
    </BackgroundTaskProvider>
  )
}

export default App
