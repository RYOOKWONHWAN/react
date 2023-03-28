import { useState } from 'react';
const MyuseState002 = () => {
  //const [상태,상태변경함수] =useState(초기값)
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
    console.log(`cnt:${cnt}`);
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};
export default MyuseState002;
