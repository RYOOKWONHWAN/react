import './Myjsx003.css';

const Myjsx003 = () => {
  const numX = 3;
  const numY = 5;
  return (
    <>
      <div>{`${numX}+${numY}=${numX + numY}`}</div>
      <div className='line'>Line test</div>
    </>
  );
};
export default Myjsx003;
