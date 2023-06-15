import "./App.css";

import { Amplify } from "aws-amplify";
import { WithAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default WithAuthenticator(App);
