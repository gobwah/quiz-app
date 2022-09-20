import logo from './../../logo.png'
import { Wrapper } from './App.style'

function App() {
  return (
    <Wrapper className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome to the Quiz App.</p>
      </header>
    </Wrapper>
  )
}

export default App
