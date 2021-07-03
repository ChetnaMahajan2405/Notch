import { useState } from "react";
import Button from "../Button";
import "./dropdown.scss";

interface Props {
  options: string[];
  intialState: string;
  resetLabel: string;
  header: string;
  onSelect: (vendor: string) => void;
  onReset: () => void;
}

const DropDown = ({
  options,
  intialState,
  resetLabel,
  header,
  onSelect,
  onReset,
}: Props) => {
  const [clicked, toggle] = useState(false);
  const [selected, setSelection] = useState(intialState);

  const onClick = () => toggle((state) => !state);
  const update = ({ target }: any) => {
    setSelection(target.innerText);
    onSelect(target.innerText);
    onClick();
  };

  const reset = () => {
    setSelection(intialState);
    onReset();
    toggle(false);
  };

  return (
    <div className="container">
      <div>
        <div className="dropdown--header">{header}</div>
        <div className="option">
          <div className="option--header" onClick={onClick}>
            <div className="label">{selected}</div>
            <div>{clicked ? <>&#9650;</> : <>&#9660;</>}</div>
          </div>
          {selected !== intialState && (
            <div className="reset--container">
              <Button
                className="dark"
                label={`X ${resetLabel}`}
                onClick={reset}
              />
            </div>
          )}
        </div>
      </div>
      {clicked && (
        <div className="option--list">
          {options.map((option) => {
            return (
              <div key={option} className="option--dropdown" onClick={update}>
                <div className="label">{option}</div>
              </div>
            );
          })}
        </div>
      )}
      {selected !== intialState && (
        <div className="reset--mobile">
          <Button className="dark" label={`X ${resetLabel}`} onClick={reset} />
        </div>
      )}
    </div>
  );
};

export default DropDown;
