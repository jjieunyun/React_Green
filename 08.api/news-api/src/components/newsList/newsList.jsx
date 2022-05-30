import React from 'react';
import NewsItem from '../newsItems/newsItem';


const NewsList = ({news}) => {
    return (
        <ul>
            {
                news.map(news=>{
                    return <NewsItem key={news.url} news={news}/>
                })
            }
        </ul>
    );
};

export default NewsList;