import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // 仮に App コンポーネントを import する例

ReactDOM.render(<App />, document.getElementById('root'));

// APIベースURLを設定
const baseURL = 'http://localhost:8080/api'; // バックエンドのAPIエンドポイントに合わせて設定してください

// axios インスタンスを作成
const api = axios.create({
  baseURL,
});

// リクエストインターセプターを設定
api.interceptors.request.use(
  (config) => {
    // リクエストを送信する前に必要な処理を追加できます
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// レスポンスインターセプターを設定
api.interceptors.response.use(
  (response) => {
    // レスポンスを受信した後に必要な処理を追加できます
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
