import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NewsList from './components/newsList/newsList';

function App() {
  const [news, setNews] = useState('');

  //🍎useEffect를 이용해서 화면이 렌더링되면 자동으로 데이터를 출력 할 수있도록 함
  //async를 붙일 수 없음, 안에 함수를 만들어 붙여줌
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

    //map을 사용하기 위해서는 배열의 값이 비어있으면 오류가 나기 때문에 
    //news값이 없다면 null을 준다.
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
