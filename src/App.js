import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <body>
        <AmplifyAuthenticator>
          <div>
            Amplify App
            <AmplifySignOut />
          </div>
        </AmplifyAuthenticator>
      </body>
    </div>
  );
}

export default App;
