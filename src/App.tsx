import './App.css'
import { UserProvider } from './context/UserContext'
import ChatScreen from './views/ChatScreen'

function App() {
  return (
    <>
      <UserProvider>
        <ChatScreen />
      </UserProvider>
    </>
  )
}

export default App
