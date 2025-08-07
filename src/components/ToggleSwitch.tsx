import { useState } from 'react';

type ClickType = boolean;
type JSXElement = () => JSX.Element;
type ClickEventButton = () => void;

interface IJSXElement {
  (): JSX.Element;
}
interface IClickEventButton {
  (): void;
}

const ToggleSwitch: JSXElement | IJSXElement = () => {
  // ts 자리
  const [isOn, setIsOn] = useState<ClickType>(false);
  const handleClick: ClickEventButton | IClickEventButton = () => {
    setIsOn(!isOn);
  };

  // tsx 자리
  return (
    <div>
      <h2>ToggleSwitch : {isOn ? '불 좀 꺼줄래?' : '불 좀 켜줄래?'}</h2>
      <div>
        <button onClick={handleClick}>토글</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
