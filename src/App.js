import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css';
import Header from "./components/Header"; // or 'antd/dist/antd.less',
import './style.css'
import Text from "./components/Text";
import './index.css'

function App() {
  return (
      <div className={"allPage"}>
            <div className={"App"}>
                <Header/>
                <Text/>
            </div>
      </div>
  );
}

export default App;
