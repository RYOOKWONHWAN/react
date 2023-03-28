import { useState } from 'react';
const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = () => {
    console.log(document.getElementById('fname').value);
    // setNames([...names, document.getElementById('fname').value]);
    // ...names 뒤에 놓으면 앞에다 추가 하는거 가능
    setNames([...names, input]);
    setInput('');
  };
  return (
    <div>
      {' '}
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>add</button>
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};
export default MyuseState003;
