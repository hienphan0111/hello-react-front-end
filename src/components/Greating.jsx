import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messageSlice';

function Greating() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.msg);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div style={{
      width: '50%', display: 'flex', justifyContent: 'center', backgroundColor: 'white',
    }}
    >
      <h3>{message.title}</h3>
      <p>{message.content}</p>
    </div>
  );
}

export default Greating;
