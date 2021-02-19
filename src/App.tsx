import React from 'react';
import {Provider} from 'react-redux'
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Main from './components/main'
import {store, persistor} from './redux/store'
import {PersistGate as BasePersistGate} from 'redux-persist/integration/react'


const App = () => {
    return (
        <Provider store={store}>
            <BasePersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Main/>
                        </Route>
                        <Route path="/main" exact>
                            <Main/>
                        </Route>
                    </Switch>
                </Router>
            </BasePersistGate>
        </Provider>
    );
}

export default App;
