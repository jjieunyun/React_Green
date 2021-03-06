import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NewsList from './components/newsList/newsList';

function App() {
  const [news, setNews] = useState('');

  //๐useEffect๋ฅผ ์ด์ฉํด์ ํ๋ฉด์ด ๋ ๋๋ง๋๋ฉด ์๋์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅ ํ  ์์๋๋ก ํจ
  //async๋ฅผ ๋ถ์ผ ์ ์์, ์์ ํจ์๋ฅผ ๋ง๋ค์ด ๋ถ์ฌ์ค
  useEffect(()=>{
    const fetchData = async () => {
        try {const response = await axios.get('https://newsapi.org/v2/top-headlines?category=business&country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a')
          console.log(response.data.articles);
          setNews(response.data.articles);}
        catch(error) {
          console.log(error)
        }
        }
      fetchData();
    },[]);

    //map์ ์ฌ์ฉํ๊ธฐ ์ํด์๋ ๋ฐฐ์ด์ ๊ฐ์ด ๋น์ด์์ผ๋ฉด ์ค๋ฅ๊ฐ ๋๊ธฐ ๋๋ฌธ์ 
    //news๊ฐ์ด ์๋ค๋ฉด null์ ์ค๋ค.
    if(!news) {
      console.log(news);
      return null;
    }

  return (
    <div className="App">
      <NewsList news={news}/>
    </div>
  );
}

export default App;
