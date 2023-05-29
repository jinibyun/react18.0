// 다음의 두 가지 import 구문을 통해서 React 의 "기본적인 기능"들을 사용할 수 있다.
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; // css 는 모듈을 import 한다기 보다는 css 파일 자체를 간단하게 가져온다는 의미
import App from './App'; // 주의: App.js 라는 js를 가져오는데 확장자는 생략 (이를 일컬어 "모듈" 이라고 한다.)

// index.html 의 root 라는 id 의 tag 를 찾아서, ReactDOM 이라고 하는 클래스의 createRoot 를 이용하여
// 가상의 메모리를 생성한다. (Virtual DOM)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // App 이라는 이름의 tag 를 로딩한다. (가져온다). 이 모듈을 가져와서 사용한다는 의미이다. Component.
