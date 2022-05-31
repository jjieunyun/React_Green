import React from 'react';
import { useParams } from 'react-router-dom';

//객체 접근 : (1) data.kim.name // (2) data['kim']['name']
const data = {
    kim : {
        name : 'ho-du',
        address : '안양',
    },
    heo : {
        name : 'ggu-ggu',
        address : '지원이집'
    }
}

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>프로필</h1>
            {/*🍎JSX구문사용 prams값 가져오기*/}
            {profile? <p>{params.username}씨</p> : <p>존재하지 않는 User입니다</p>}
            {profile? <p>Name : {profile['name']}</p> :<p>존재하지않는 User입니다</p>}
            {profile? <p>address : {data[params.username]['address']}</p> :<p>존재하지않는 User입니다</p>}
        </div>
    );
};

export default Profile;