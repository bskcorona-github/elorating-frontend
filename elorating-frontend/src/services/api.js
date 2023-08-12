import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // バックエンドのAPIエンドポイントのベースURL
  timeout: 5000, // タイムアウト時間（ミリ秒）
});

// チーム情報を取得するAPI呼び出し
export const getTeamResult = () => {
  return api.get('/team/result');
};

//TODO 他に必要なAPI呼び出しをここに追加する

export default api;
