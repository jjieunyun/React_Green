//🍎List 클래스 컴포넌트

import React, { Component } from 'react';

class ListClass extends Component {
    state = {
        numbers : [1, 2, 3, 4, 5],
        seasons : [
            //키값을 위한 id값을 추가
            {id : 1, text: '봄'},
            {id : 2, text: '여름'},
            {id : 3, text: '가을'},
            {id : 4, text: '겨울'}
        ],
        students : [
            {id : 1, name : '호두' },
            {id : 2, name : '꾸꾸' },
            {id : 3, name : '잠와' }
        ],
        //값을 받아올 text와 id
        inputId : 5,
        inputText : '',
    };

    //🌳map을 통해서 동일한 컴포넌트 또는 element에 넣어서 새로운 배열로 저장
    listItems = this.state.numbers.map((number,index) => {
        return <li key={index}>{number}</li>
    });

    //🌳클릭하면 해당 데이터 삭제하는 함수
    deleteSeason = (id) => {
        const seasons = this.state.seasons.filter(item => item.id !== id)
        this.setState({seasons})
    };

    //🌳바뀐 값을 가져오는 함수
    changeText = (event) => (
        this.setState({[event.target.name]: event.target.value})
    )
        

    //🌳배열 안에 값을 넣는 함수
    getText = () => {
        const nextSeason = this.state.seasons.concat({
            id : this.state.inputId,
            text : this.state.inputText
        });
        this.setState({ inputId : this.state.inputText +1})
        this.setState({ seasons : nextSeason })
    }

    render() {
        //🌳render함수 안에서 state를 사용하고 함수를 정의해줄 수있다.
        const {seasons, students} = this.state;

        const listSeason = seasons.map((item)=> {
            return (<li onClick={()=>this.deleteSeason(item.id)} key={item.id}>{item.text}</li>)
        })
        
        return (
            <>
            <h3>🍎list를 사용해서 data출력</h3>
                <p>🌳1. state안의 numbers 출력</p>
                <ul>{this.listItems}</ul>

                <p>🌳2.state안의 seasons배열 출력</p>
                <p>🌻클릭하면 seasons의 아이템하나씩 삭제</p>
                <ul>{listSeason}</ul>

                <p>🌳3. table로 데이터 출력</p>
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
                
                <h3>🍎input값 출력하기</h3>
                <input 
                    type="text"
                    name="inputText"
                />
                <button
                    onClick={this.getText}
                    >
                        추가
                    </button>
            </>
        );
    }
}

export default ListClass;