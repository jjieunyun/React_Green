import React from 'react';

const UserData = () => {
    return (
        <div>
            <button>버튼을 눌러서 값을 가져오세요.</button>
            <button>버튼을 눌러서 값을 추가하세요</button>
            {/* 리덕스를 통해 가져온 값을 map을 통해 추가 */}
        </div>
    );
};

export default UserData;