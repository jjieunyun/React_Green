//๐List ํด๋์ค ์ปดํฌ๋ํธ

import React, { Component } from 'react';

class ListClass extends Component {
    state = {
        numbers : [1, 2, 3, 4, 5],
        seasons : [
            //ํค๊ฐ์ ์ํ id๊ฐ์ ์ถ๊ฐ
            {id : 1, text: '๋ด'},
            {id : 2, text: '์ฌ๋ฆ'},
            {id : 3, text: '๊ฐ์'},
            {id : 4, text: '๊ฒจ์ธ'}
        ],
        students : [
            {id : 1, name : 'ํธ๋' },
            {id : 2, name : '๊พธ๊พธ' },
            {id : 3, name : '์ ์' }
        ],
        //๊ฐ์ ๋ฐ์์ฌ text์ id
        inputId : 5,
        inputText : '',
    };

    //๐ณmap์ ํตํด์ ๋์ผํ ์ปดํฌ๋ํธ ๋๋ element์ ๋ฃ์ด์ ์๋ก์ด ๋ฐฐ์ด๋ก ์ ์ฅ
    listItems = this.state.numbers.map((number,index) => {
        return <li key={index}>{number}</li>
    });

    //๐ณํด๋ฆญํ๋ฉด ํด๋น ๋ฐ์ดํฐ ์ญ์ ํ๋ ํจ์
    deleteSeason = (id) => {
        const seasons = this.state.seasons.filter(item => item.id !== id)
        this.setState({seasons})
    };

    //๐ณ๋ฐ๋ ๊ฐ์ ๊ฐ์ ธ์ค๋ ํจ์
    changeText = (event) => (
        this.setState({[event.target.name]: event.target.value})
    )
        

    //๐ณ๋ฐฐ์ด ์์ ๊ฐ์ ๋ฃ๋ ํจ์
    getText = () => {
        const nextSeason = this.state.seasons.concat({
            id : this.state.inputId,
            text : this.state.inputText
        });
        this.setState({ inputId : this.state.inputText +1})
        this.setState({ seasons : nextSeason })
    }

    render() {
        //๐ณrenderํจ์ ์์์ state๋ฅผ ์ฌ์ฉํ๊ณ  ํจ์๋ฅผ ์ ์ํด์ค ์์๋ค.
        const {seasons, students} = this.state;

        const listSeason = seasons.map((item)=> {
            return (<li onClick={()=>this.deleteSeason(item.id)} key={item.id}>{item.text}</li>)
        })
        
        return (
            <>
            <h3>๐list๋ฅผ ์ฌ์ฉํด์ data์ถ๋ ฅ</h3>
                <p>๐ณ1. state์์ numbers ์ถ๋ ฅ</p>
                <ul>{this.listItems}</ul>

                <p>๐ณ2.state์์ seasons๋ฐฐ์ด ์ถ๋ ฅ</p>
                <p>๐ปํด๋ฆญํ๋ฉด seasons์ ์์ดํํ๋์ฉ ์ญ์ </p>
                <ul>{listSeason}</ul>

                <p>๐ณ3. table๋ก ๋ฐ์ดํฐ ์ถ๋ ฅ</p>
                <table>
                    <tbody>
                    <tr>
                        <td>NO.</td>
                        <td>NAME</td>
                    </tr>
                        {students.map((item)=> (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <h3>๐input๊ฐ ์ถ๋ ฅํ๊ธฐ</h3>
                <input 
                    type="text"
                    name="inputText"
                />
                <button
                    onClick={this.getText}
                    >
                        ์ถ๊ฐ
                    </button>
            </>
        );
    }
}

export default ListClass;