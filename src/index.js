import React from 'react';
import ReactDOM from 'react-dom';
// import antd from 'antd'
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import Router from './routers'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
