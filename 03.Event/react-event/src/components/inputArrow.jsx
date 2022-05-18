//🍎함수형 컴포넌트

import { useState } from "react";

const InputArrow = () => {
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        user: "",
        message: "",
    });
    const inputChange = (e) => {
        setMessage(e.target.value)
    };
    
    const formChange = (e) => {
        //스프레드연산자를 사용해서 form안의 값을 꺼내서 사용
        const nextForm = {
            ...form,
            [e.target.name ]: e.target.value,
        };
        setForm(nextForm)
    }
    return (
        <>
            <h3>🍎3. useState사용(함수형)</h3>
            <p>{message}</p>
            <input 
                type="text" 
                onChange={inputChange}
            />
            <p>{form.user}의 메시지 : {form.message}</p>
            <input 
                type="text"
                name="user"
                onChange={formChange} 
            />
        </>
    )
}

export default InputArrow;