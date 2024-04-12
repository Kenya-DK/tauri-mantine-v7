import './App.css'
import { AppShell } from '@mantine/core'
import { NavbarMinimalColored } from './NavbarMinimalColored/NavbarMinimalColored'

function App() {

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>

        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarMinimalColored />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default App
