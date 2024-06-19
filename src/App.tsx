import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AccordionComp } from './components'
import { router } from './routes/route'
import { BackgroundTaskProvider } from './context/BackgroundTask.context'

function App() {

  return (
    <BackgroundTaskProvider>
      <AccordionComp />
      <RouterProvider router={router} />
    </BackgroundTaskProvider>
  )
}

export default App
