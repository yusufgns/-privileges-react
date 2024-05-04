import { PRIVILEGES } from './constants/privileges'
import './App.css'
import { CustomPrivilegesComponent } from './components/privileges/custom'

function App() {
  return (
    <>
      <CustomPrivilegesComponent
        userPrivileges={[PRIVILEGES.PAID]}
        componentPrivileges={[PRIVILEGES.PAID]}
        active="button"
      >
        TEST PRIVILEGES
      </CustomPrivilegesComponent>
    </>
  )
}

export default App
