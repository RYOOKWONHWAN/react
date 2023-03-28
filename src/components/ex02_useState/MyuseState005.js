import { useState } from 'react';

const MyuseState005 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });
  //name 만 호출시 객체 내용을 변경한다. 비동기화식으로 처리가 되기 때문에 첫 번째 변화 이후 주소와 번호 값이 사라짐
  const handlechange = (e) => {
    let data = {};
    // data['id'] = e.target.value;
    // console.log(typeof data);
    // console.log(data, data.id);
    // e.target 으로 부터 id , value 를 추출한다.
    const { id, value } = e.target;
    // 그 값으로 업데이트
    setCustomer({ ...customer, [id]: value });
    console.log(id, value);
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type='text'
          value={customer.name}
          id='name'
          onChange={handlechange}
        />
      </p>
      <p>
        <span>주소</span>
        <input
          type='text'
          value={customer.address}
          id='address'
          onChange={handlechange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          id='phone'
          onChange={handlechange}
        />
      </p>
      <button>확인</button>
    </div>
  );
};
export default MyuseState005;
