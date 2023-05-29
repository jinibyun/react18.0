import Todo from './components/Todo';

// JS 에서 function 은 객체이다.
function App() {
  //  JSX (JavaScript Xml)
  //  태그로 표현되는 부분을 메모리로 로딩 (xml 형식을 취해서)


  // 코드
  const i = 10;

  // 보여지는 부분 (화면)
  return (
    <div>
      <h1>My Todos</h1>
      {/* Todo 라는 하위 component 에 값을 text 라는 property로 넘기고 있다. */}
      <Todo text='Learn React' />
    </div>
  );
}


// 여기서 export 의 의미는 다른 js 에서 이 파일을 import 해서
// 사용가능하도록, 즉 모듈화해서 사용가능하도록 한다.
export default App;
