import React from 'react';
import Counter from '../components/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

const mapStateToProps = state => ({
    number : state.counter.number
})

const mapDispatchToProps = dispatch => ({
    increase : () => {dispatch(increase())},
    decrease : () => {dispatch(decrease())}
})

//store로 가져온 redux 모듈
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);