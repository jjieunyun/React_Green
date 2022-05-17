//🍎클래스형 컴포넌트의 State
import {Component} from 'react';

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }
    render() {
        const { number } = this.state
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    this.setState({number : number +1})
                }}
                >
                    +1
                </button>
                {/*🌳함수형식으로 setState내용전달 
                    prevState => ({state : 값})와 같은 형식으로 전달 
                    객체 형식으로 전달 */}
                <button onClick={()=>{
                    this.setState(prevState => ({
                        number : prevState.number + 1
                    }))
                }}
                >
                    +1
                </button>

                {/*버튼을 눌렀을 때 0으로 초기화 하는 버튼 */}
                <button onClick={()=> {
                    this.setState({number : 0})
                }}>
                    Reset
                </button>

                {/*버튼을 눌렀을 때 -1으로 초기화 하는 버튼 */}
                <button onClick={()=> {
                    this.setState(prevState => ({
                        number : prevState.number -1
                    }))
                }}>
                    -1
                </button>
            </div>
        )
    }
}

export default StateComponent;