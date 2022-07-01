import { useRoutes } from 'react-router-dom'
import routes from './routes'
import memoryUtils from './utils/memoryUtils'
import storeUtils from './utils/storageUtils'

export default function App() {

  const element = useRoutes(routes)

  const user = storeUtils.getUser()
  memoryUtils.user = user

  return element
}
