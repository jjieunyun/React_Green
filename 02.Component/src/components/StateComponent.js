//πν΄λμ€ν μ»΄ν¬λνΈμ State
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
                {/*π³ν¨μνμμΌλ‘ setStateλ΄μ©μ λ¬ 
                    prevState => ({state : κ°})μ κ°μ νμμΌλ‘ μ λ¬ 
                    κ°μ²΄ νμμΌλ‘ μ λ¬ */}
                <button onClick={()=>{
                    this.setState(prevState => ({
                        number : prevState.number + 1
                    }))
                }}
                >
                    +1
                </button>

                {/*λ²νΌμ λλ μ λ 0μΌλ‘ μ΄κΈ°ν νλ λ²νΌ */}
                <button onClick={()=> {
                    this.setState({number : 0})
                }}>
                    Reset
                </button>

                {/*λ²νΌμ λλ μ λ -1μΌλ‘ μ΄κΈ°ν νλ λ²νΌ */}
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