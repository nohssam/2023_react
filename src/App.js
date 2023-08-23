import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 1.App 를 BrowserRouter 로 감싼다.
function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Header />
        <Routes>
          {/* "/"는 첫 페이지를 의미한다. */}
          <Route path="/" element={<DayList />} />
          <Route path="/day" element={<Day />} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
