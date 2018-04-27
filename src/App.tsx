import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// routes
import routes from './routes';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="wrap">
                    <BrowserRouter>
                    {routes}
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
