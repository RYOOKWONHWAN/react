import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });
  //name 만 호출시 객체 내용을 변경한다. 비동기화식으로 처리가 되기 때문에 첫 번째 변화 이후 주소와 번호 값이 사라짐
  const handleName = (e) => {
    // setCustomer({...customer, name:e.target.value}) 아래와 같은 기능
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });

    console.log(customer.name, customer.address, customer.phone);
  };
  const handleAddress = (e) => {
    // setCustomer({...customer, address:e.target.value}) 아래와 같은 기능
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
    console.log(customer.name, customer.address, customer.phone);
  };
  const handlePhone = (e) => {
    // setCustomer({...customer, phone:e.target.value}) 아래와 같은 기능
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
    console.log(customer.name, customer.address, customer.phone);
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>
      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>
      <button>확인</button>
    </div>
  );
};
export default MyuseState004;
