import { Link } from 'react-router-dom'
import logo from './../../assets/logo.png'
import { Wrapper } from './App.style'

function App() {
  return (
    <Wrapper className='App'>
      <header className='App-header'>
        <nav>
          <Link to='/invoices'>Invoices</Link> | <Link to='/expenses'>Expenses</Link>
        </nav>
      </header>
      <main className='App-body'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome to the Quiz App.</p>
      </main>
    </Wrapper>
  )
}

export default App
