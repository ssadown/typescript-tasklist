import './styles/App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import { FC } from 'react';

const App: FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Content/>
        </div>
    )
}

export default App;
