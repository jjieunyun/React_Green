//πν΄λμ€ν μ»΄ν¬λνΈ

import {Component} from 'react';

class MyComponent extends Component {
    //π³ν΄λμ€ν μ»΄ν¬λνΈμμλ ν¨μ λμ μ renderλ₯Ό ν΅ν΄μ λ΄λ³΄λΈλ€.
    render() {
        const name = 'react';
        return (
            <div>
                <h1>π{name}! μ²« μ»΄ν¬λνΈ μλλ€π</h1>
            </div>
        )
    }
}


export default MyComponent;
