import * as React from "react";
import s from "./Switch.module.css";

type SwitchProps = {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
  readOnly?: boolean;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  label,
  onChange,
  readOnly,
}) => {
  return (
    <label className={s.switch}>
      <input
        className={s.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        readOnly={readOnly}
      />
      <span className={s.handleWrap}></span>
      <span className={s.label}>{label}</span>
    </label>
  );
};

export default Switch;
