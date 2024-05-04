import { PRIVILEGES, moderator } from './constants/privileges'
import './App.css'
import { PrivilegesContainer } from './components/privileges/container'

function App() {
  return (
    <>
      <PrivilegesContainer
        moderator={Object.values(moderator)}
        userPrivileges={[PRIVILEGES.FREE]}
        componentPrivileges={PRIVILEGES.ADMIN}
        active_tooltip
      >
        TEST PRIVILEGES
      </PrivilegesContainer>
    </>
  )
}

export default App
