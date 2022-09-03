import { useState } from 'react'
import Header from './components/Header'
import NotificationButton from './components/NotificationButton'
import SalesCard from './components/SalesTable'
import * as S from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header/>
        <S.MainContent>
            <SalesCard/>
        </S.MainContent>
      </div>
    </div>
  )
}

export default App
