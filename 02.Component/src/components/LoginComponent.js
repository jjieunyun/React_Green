//๐์ปดํฌ๋ํธ ์ค์ต

function LoginComponent(props) {
    //props๋ก ๊ฐ์ ๋ฐ์์์ ์ถ๋ ฅํ๊ธฐ
    return (
        <div>
            <h3>๐ณํจ์ํ์ผ๋ก ๋ง๋  ์ปดํฌ๋ํธ</h3>
            {
                props.login === 'true'?(
                    <div>
                        <h4>๋ก๊ทธ์ธ์ ์ฑ๊ณตํ์์ต๋๋ค.</h4>
                        <p>Hi, HODU๐โ๐ฆบ</p>
                        <h5>"props๋ก ์ ๋ฌ๋ฐ์ ๊ฐ : {props.login}"</h5>
                    </div>
                ) : (
                    <div>
                        <h4>๋ก๊ทธ์ธ์ด ํ์ํฉ๋๋ค.</h4>
                        <p>๐</p>
                        <h5>"props๋ก ์ ๋ฌ๋ฐ์ ๊ฐ : {props.login}"</h5>
                    </div>
                )
            }
        </div>
    )
}

export default LoginComponent;




