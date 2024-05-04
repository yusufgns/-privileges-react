import { PRIVILEGES } from './constants/privileges'
import './App.css'
import { CustomPrivilegesComponent } from './components/privileges/custom'
import { Button } from './components/ui/button'
import { PrivilegesController } from './utils/privileges'

function App() {
  return (
    <div className='flex items-center flex-col gap-4'>
      <CustomPrivilegesComponent
        userPrivileges={[PRIVILEGES.PAID]}
        componentPrivileges={[PRIVILEGES.FREE]}
        active="tooltip"
      >
        <Button disabled={!PrivilegesController([PRIVILEGES.FREE], [PRIVILEGES.PAID])}>Hover Me</Button>
      </CustomPrivilegesComponent>

      <CustomPrivilegesComponent
        userPrivileges={[PRIVILEGES.PAID]}
        componentPrivileges={[PRIVILEGES.FREE]}
        active="button"
      >
        <Button>Click me</Button>
      </CustomPrivilegesComponent>

      <CustomPrivilegesComponent
        userPrivileges={[PRIVILEGES.PAID]}
        componentPrivileges={[PRIVILEGES.FREE]}
        active="not_privileges"
      >
        <Button disabled={!PrivilegesController([PRIVILEGES.FREE], [PRIVILEGES.PAID])}>Click me</Button>
      </CustomPrivilegesComponent>

      <CustomPrivilegesComponent
        userPrivileges={[PRIVILEGES.PAID]}
        componentPrivileges={[PRIVILEGES.FREE]}
        active="not_privileges"
        not_privileges='pages'
      >
        <Button disabled={!PrivilegesController([PRIVILEGES.FREE], [PRIVILEGES.PAID])}>Click me</Button>
      </CustomPrivilegesComponent>
    </div>
  )
}

export default App
