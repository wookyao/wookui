import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button</h1>
        <Button>default</Button>
        <Button block round btnType="primary" size="lg">
          Edit Info
        </Button>
        <Button block round btnType="info">
          info
        </Button>
        <Button className={"cusbtn"} btnType="danger" size="sm">
          danger
        </Button>
        <Button className={"cusbtn"} btnType="success" size="mini">
          success
        </Button>
        <Button className={"cusbtn"} disabled={true} btnType="warning">
          warning
        </Button>
        <h1>LinkButton</h1>
        <Button btnType="link" href="www.baidu.com">
          www.baidu.com
        </Button>
      </header>
    </div>
  );
}

export default App;
