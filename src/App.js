// switch route(url : movies의 id ...) 찾는것 route찾으면 컴포넌트 렌더링
// Route path="/" 유저가 홈화면으로 갈때(Home route로 랜더링)
// link 전체페이지 새로고침없이 유저가 원하는 곳으로 이동
//Route path="/movie/:id"></Route>  :id 리액트라우터에 이 url이 변수받을것이라 해주고 디테일.js에서 useParams라는 함수사용하면 리액트라우터가 변수값 넘겨줌
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  import Home from "./routes/Home";
  import Detail from "./routes/Detail"

function App() {
 return <Router>
   <Switch>
     <Route path="/movie/:id">
       <Detail/>
     </Route>
     <Route path="/">
       <Home />
     </Route>
   </Switch>
 </Router>
}

export default App;



