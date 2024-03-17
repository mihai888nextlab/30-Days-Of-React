import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert btnHandle={() => setAlertVisibility(false)}>
          Hello <b>World</b>
        </Alert>
      )}

      <Button onClickHandle={() => setAlertVisibility(true)} color="secondary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
