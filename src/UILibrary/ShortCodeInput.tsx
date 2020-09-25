import * as React from "react";
import s from "./ShortCodeInput.module.css";

type ShortCodeInputProps = {
  disabled?: boolean;
  autoFocus?: boolean;
  onChange: (value: string) => void;
};

type ShortCodeInputState = {
  value: string;
  focused: boolean;
};

const CODE_LENGTH = new Array(4).fill(0);
const inputWidth = 88;
const inputWidthWithPadding = inputWidth + 16;

class ShortCodeInput extends React.Component<ShortCodeInputProps, ShortCodeInputState> {
  input = React.createRef<HTMLInputElement>();
  state = {
    value: "",
    focused: false,
  };

  handleClick = () => {
    this.input.current?.focus();
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };

  handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      this.setState((state) => {
        return {
          value: state.value.slice(0, state.value.length - 1),
        };
      });
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    this.setState(
      (state) => {
        if (state.value.length >= CODE_LENGTH.length) return null;

        return {
          value: (state.value + value).slice(0, CODE_LENGTH.length),
        };
      },
      () => {
        this.props.onChange(this.state.value);
      }
    );
  };

  render() {
    const { value } = this.state;

    const values = value.split("");

    const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

    const hideInput = !(values.length < CODE_LENGTH.length);

    return (
      <div className={s.wrap} onClick={this.handleClick}>
        <input
          autoFocus
          value=""
          ref={this.input}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className={s.input}
          disabled={this.props.disabled}
          style={{
            width: inputWidth,
            top: 0,
            bottom: 0,
            left: `${selectedIndex * inputWidthWithPadding}px`,
            opacity: hideInput ? 0 : 1,
            zIndex: 1,
          }}
        />
        {CODE_LENGTH.map((v, index) => {
          return (
            <div className={s.display} key={index}>
              {values[index]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShortCodeInput;
