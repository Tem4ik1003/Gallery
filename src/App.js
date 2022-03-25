import logo from './logo.svg';
import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import PageImageContainer from "./component/Pages/PageImage/PageImageContainer";
import CurrentImage from "./component/Pages/CurrentImage/CurrentImage";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PageImageContainer/>}/>
                    <Route path='/:id' element={<CurrentImage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
