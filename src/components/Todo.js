import  { useState }  from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

  // object deconstruction
  const [showModal, setShowModal]  = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  console.log(showModal);
  // JSX
  return (
    // class 라는 속성을 사용할 수 없고, 반드시 css 표현을 위해서는 className 을 사용해야 한다.    
    <div className='card'>
      {/* { } 표현을 통해서 넘어온 속성 값을 보여준다. */}
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {/* 부모 component 와 자식 component 가 서로 통신 하는 두 가지 방법
      1. property 를 자식 component 에게 전달 (함수 포인트 정보 값이 아님): parent to child
      2. event handler 를 자식에게 전달 (event handler 는 함수 포인트 정보 값): child to parent
      */}
      {showModal && <Backdrop onClick={closeModalHandler} />}
      
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
