const React = require('react');

const GuGuDan = () => {
    //구조분해 할당
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(
      Math.ceil(Math.random() * 9)
    );
    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    const inputRef = React.useRef();
    const onChangeInput = (e) => {
      setValue(e.target.value);
    };
    const onSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === first * second) {
        setResult("정답 : " + value);
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue("");
      } else {
        setResult("땡");
        setValue("");
      }
      inputRef.current.focus();
    };
    return (
      <>
        <div>
          {first} 곱하기 {second} 는?
        </div>
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputRef}
            type="number"
            value={value}
            onChange={onChangeInput}
          />
          <button type="submit">입력!</button>
        </form>
        <div>{result}</div>
      </>
    );
  };

  module.exports = GuGuDan;