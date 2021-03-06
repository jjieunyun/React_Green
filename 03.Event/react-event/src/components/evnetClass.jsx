//๐ํด๋์คํ ์ปดํฌ๋ํธ 
import React, { Component } from 'react';

//๐ณ๋ฆฌ์กํธ์์ component๋ฅผ ์์๋ฐ์์ ์ฌ์ฉ
class EvnetClass extends Component {
    //props์ ๊ฐ์ ๋ถ๋ชจ์ปดํฌ๋ํธ์์ ๋ฐ์์ค๋ ๊ฐ์ด๋ฏ๋ก component์์ ํ ๋น๋๋ค.
    constructor(props) {
        //๋ฐ์์จ ๊ฐ์ super๋ก ์ ๋ฌ, ์ฌ์ฉํ  ๋๋ this๋ก ์ฌ์ฉ
        super(props);
        //ํด๋์คํ ์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๊ธฐ ์ํด constructor์ ์ ์ฅ
        this.state = {
            message : '๊ธฐ์กด ๋ฉ์์ง ์๋๋ค'
        };
        //ํด๋์ค ์์์ ์ฌ์ฉํ๊ธฐ์ํด this.onClickEventํจ์ ์ด๋ฆ ์์ฑ
        //์์ฑํ ํจ์๋ constructor ๋ฐ๊นฅ์ ์์ฑ๋์ด์ ์ฐ๊ฒฐํ๊ธฐ ์ํด ์๋์ ๊ฐ์ด ์์ฑํ๋ค.
        //this.changeMsg ๋ฐ์์ ์์ฑํ ์ด๋ฆ์ผ๋ก ์ฐ๊ฒฐ -> this.changeMsg์ this์์น๋ฅผ ์๋ ค์ฃผ๊ธฐ ์ํด bind์ฌ์ฉ
        //โญ ArrowFuntion์์๋ ๋ฐ๋ก bind๋ฅผ ์ฌ์ฉํด ์ฃผ์ง ์์๋ ํจ์๊ฐ ์์์ ์คํ๋๋ค,
            //ํ์ดํ ํจ์๊ฐ ์ฌ์ฉ๋ ๊ณณ์ this๋ฅผ ์ฐพ๋๋ค.
        this.changeMsg = this.changeMsg.bind(this);
        this.onChangeMsg = this.onChangeMsg.bind(this);
    }

    //๐ณ์ฌ์ฉํ  ํจ์์ ๋ด์ฉ : ์ด๋ ํ ํจ์์ด๋  ์๊ด์์
    changeMsg = ()=>{
        this.setState({
            message : '๋ฉ์์ง๊ฐ ๋ฐ๋์์ต๋๋ค.'
        })
    }

    //๐ณonChangeMsg๋ผ๋ ํจ์๋ฅผ ๋ง๋ค๊ณ  onClick์ ์ด์ฉํด์ ์ฐ๊ฒฐ
    onChangeMsg = ()=>{
        this.setState({
            message : '๋ฉ์์ง์๋๋ค.'
        })
    }

    render() {
        const {name} = this.props;
        const {message} = this.state;
        
        return (
            <div>
                <h3>๐1. {name}์ฐ์ต</h3>
                <h3>"{message}"</h3>
                <button onClick={this.changeMsg} //this๋ฅผ ํตํด์ ๋ฉ์๋๋ฅผ ๋ค๊ณ ์จ๋ค
                >Button1</button> <br/>
                <button onClick={this.onChangeMsg}>Button2</button>
            </div>
        );
    }
}

export default EvnetClass;