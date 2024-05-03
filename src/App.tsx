import { PRIVILEGES } from './constants/privileges'
import './App.css'
import { PrivilegesContainer } from './components/container/privileges'

function App() {
  return (
    <>
      <PrivilegesContainer userPrivileges={[PRIVILEGES.PAID]} componentPrivileges={PRIVILEGES.PAID} active_tooltip>
        TEST
      </PrivilegesContainer>
    </>
  )
}

export default App
