import React from 'react';
import Button, { ButtonType, ButtonSize} from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <Button autoFocus disabled>Hellow world!</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Hellow world!</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Hellow world!</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hellow world!</Button>
      <Button className="test-class" btnType={ButtonType.Primary} size={ButtonSize.Small}>Hellow world!</Button>
      <Button onClick={() => { console.log(111111) }} btnType={ButtonType.Danger} size={ButtonSize.Small}>Hellow world!</Button>
    </div>
  );
}

export default App;
