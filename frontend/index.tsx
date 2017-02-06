
import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}>{

    render(){
        return (<div>
            <h1>sss</h1>
        </div>);
    }
}

var appContainer = document.getElementById("app-container");
ReactDOM.render(<App />, appContainer);