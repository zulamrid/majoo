import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Store from './store/createStore';
import RootApp from './apps';

function App() {
    return (
        <Provider store={Store}>
            <RootApp />
        </Provider>
    );
}

export default App;