
import Dash from "../component/dash"
import Navbar from "../component/navbar";
import Review from "../component/review"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/review" element={<Review />} />
    
      </Routes>
    </Router>
    </>
  )
}

export default App
