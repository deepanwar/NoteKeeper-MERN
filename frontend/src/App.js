import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route
} from 'react-router-dom'

import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/Mynotes/MyNotes';


function App() {
  return (
    <>

      <Header />
      <main>
          <Routes>
            <Route path="/" exact element={<LandingPage/>} />
            <Route path="/mynotes" exact element={<MyNotes/>} />
          </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
