import React from 'react';
import { useParams } from 'react-router-dom';

const Board = () => {
    const {id} = useParams();

    return (
        <div>
            <h3>{id} 게시글입니다.</h3>
        </div>
    );
};

export default Board;