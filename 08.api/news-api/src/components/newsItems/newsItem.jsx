import React from 'react';
import styles from './newsItems.module.css'


const NewsItem = ({news}) => {
    return (
        <div className={styles.list}>
            {news.urlToImage && (
                <div className={styles.thumbnamil}>
                    <a href={news.url}>
                        <img src={news.urlToImage} alt="" />
                    </a>
                </div>
            )}
            <div className={styles.contents}>
                <h3>{news.title}</h3>
                <h4>{news.publishedAt}</h4>
                <p>{news.description}</p>
            </div>
        </div>
    );
};

export default NewsItem;