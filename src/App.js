import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import {Switch, Route} from 'react-router-dom'

function App() {

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/search/searchValue/:searchValue' component={Search}/>
                <Route path='/search/:sourceId' component={Search}/>
            </Switch>

        </div>
    );
}

export default App;
