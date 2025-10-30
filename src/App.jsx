
import './App.css'
import MainBodyComp from './assets/ReactComponents/MainBodyComp'
import SearchComp from './assets/ReactComponents/SearchComp'

function App() {

  return (
    <>
      <div className='mainContainer text-center pt-2'>
          <h1>Weather Application </h1>
          <p>Created by Sai Ram Mummineni</p>
          <SearchComp />
          <MainBodyComp />
      </div>
    </>
  )
}

export default App
