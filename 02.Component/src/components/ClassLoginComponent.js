//๐์ปดํฌ๋ํธ ์ค์ต
import {Component} from 'react';

class ClassLoginComponent extends Component {
    render() {
        //ํด๋์ค์์ props๊ฐ์ ๊ฐ์ ธ์ฌ๋๋ this.props๋ฅผ ํตํด์ ๊ฐ์ ธ์จ๋ค.
        const {login, name} = this.props;
        return (
        <div>
            <h3>๐ณClass๋ก ๋ง๋  ์ปดํฌ๋ํธ</h3>
            {
                login? (
                    <div>
                        <h4>๋ก๊ทธ์ธ์ ์ฑ๊ณตํ์์ต๋๋ค.</h4>
                        <p>Hi, {name}๐ฉ</p>
                    </div>
                ) : (
                    <div>
                        <h1>๋ก๊ทธ์ธ์ด ํ์ํฉ๋๋ค.</h1>
                        <p>๐</p>
                    </div>
                )
            }
        </div>
        )
    }
}

ClassLoginComponent.defaultProps = {
    name : 'GGU GGU'
}

export default ClassLoginComponent;