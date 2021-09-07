import React from "react";
import "./App.scss";
import Button from "./components/Button";
import Alert from "./components/Alert/index";
import { Menu, MenuItem } from "./components/Menu/index";

function App() {
  const handlerMenuSelect = (index: number) => {
    console.log(index);
  };

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

        <h1>Alert</h1>
        <Alert type="info" title="info" desc="This is an info alert" />
        <Alert
          className={"mtb"}
          type="danger"
          title="danger"
          desc="This is an error alert"
        />
        <Alert
          className={"mtb"}
          type="success"
          title="success"
          desc="This is an success alert"
        />
        <Alert type="warning" title="warning" />

        <h1>Menu</h1>
        <Menu
          defaultIndex={0}
          onSelect={(index: number) => handlerMenuSelect(index)}
        >
          <MenuItem>link 1</MenuItem>
          <MenuItem>link 1</MenuItem>
          <MenuItem disabled>link 1</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
