/*
    useEffect : 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정한다.
    특정작업 (side effect) : Time(setTimeOut), Ajax
    useEffect : useEffect는 side effect 라는 뜻이다.
    useEffect의 4가지 종류 
    1. useEffect(callback) : 마운트 후 리렌더링 될때 마다
    2. useEffect(callback,[]) : 마운트 후
    3. useEffect(callback,[state]) : 마운트 후 , state
    4. useEffect(callback,{return ();},[]) : 마운트 후, 언마운트 전
*/

import { useEffect, useState } from 'react';

const MyuseEffect001 = () => {
  let data = 0;
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  //   useEffect(() => {
  //     console.log('렌더링이되었습니다.');
  //   });
  //   useEffect(() => {
  //     console.log('name렌더링이되었습니다.');
  //   }, [name]);
  //   useEffect(() => {
  //     console.log('nickName렌더링이되었습니다.');
  //   }, [nickName]);
  useEffect(() => {
    console.log('렌더링 return:' + name);
    console.log('렌더링 return:' + nickName);
    return () => {
      console.log('clean up');
    };
  }, [name, nickName]);
  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={onChangeName}
      />
      <input
        type='text'
        placeholder='nickName'
        value={nickName}
        onChange={onChangeNickName}
      />
      <br />
      <span>이름:</span>
      <br />
      <span>닉네임:</span>
    </div>
  );
};
export default MyuseEffect001;
