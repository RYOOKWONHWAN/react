import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    // console.log(nameRef.current.value);
    // document.querySelector('#ndata').value = '';
  };
  useEffect(() => {
    let ndata = document.querySelector('#ndata');
    ndata.focus();
  });

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} id='ndata' />
      <button onClick={handleBtn}>click</button>
    </div>
  );
};
export default MyuseRef002;
