//🍎컴포넌트 실습

function LoginComponent(props) {
    //props로 값을 받아와서 출력하기
    return (
        <div>
            <h3>🌳함수형으로 만든 컴포넌트</h3>
            {
                props.login === 'true'?(
                    <div>
                        <h4>로그인에 성공하였습니다.</h4>
                        <p>Hi, HODU🐕‍🦺</p>
                        <h5>"props로 전달받은 값 : {props.login}"</h5>
                    </div>
                ) : (
                    <div>
                        <h4>로그인이 필요합니다.</h4>
                        <p>😂</p>
                        <h5>"props로 전달받은 값 : {props.login}"</h5>
                    </div>
                )
            }
        </div>
    )
}

export default LoginComponent;




