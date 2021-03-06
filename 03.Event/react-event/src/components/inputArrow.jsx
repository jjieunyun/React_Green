//๐ํจ์ํ ์ปดํฌ๋ํธ

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
        //์คํ๋ ๋์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด์ form์์ ๊ฐ์ ๊บผ๋ด์ ์ฌ์ฉ
        const nextForm = {
            ...form,
            [e.target.name ]: e.target.value,
        };
        setForm(nextForm)
    }
    return (
        <>
            <h3>๐3. useState์ฌ์ฉ(ํจ์ํ)</h3>
            <p>{message}</p>
            <input 
                type="text" 
                onChange={inputChange}
            />
            <p>{form.user}์ ๋ฉ์์ง : {form.message}</p>
            <input 
                type="text"
                name="user"
                onChange={formChange} 
            />
        </>
    )
}

export default InputArrow;