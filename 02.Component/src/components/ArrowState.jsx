//๐ํจ์ํ ์ปดํฌ๋ํธ์์ state๊ฐ ์ฌ์ฉ๋ฐฉ๋ฒ
//๐ณuseState๋ ๋ฆฌ์กํธ 16.8์์ ์ถ๊ฐ!-> ๊ทธ ์ด์ ์๋ ํด๋์คํ์ผ๋ก ์ฌ์ฉ

import { useState } from 'react'

const ArrowState = (props) => {
    //useState()์ ๋ฐํ๊ฐ์ด [๊ฐ, ๊ฐ์ ์์ ํ๋ ๋ฉ์๋]
    //number์ ๊ฐ์ useState(0)์์ ํ ๋นํ ๊ฐ
        //๐ณ๋น ๊ตฌ์กฐํ๋ฅผ ํตํด ํ ๋น
        //setNumber๋ฉ์๋๋ setState์ ๋์ผํ ์ญํ 
    const [number, setNumber] = useState(0)

    //name๊ฐ์ด ํ๊ธธ๋์ธ state๋ฅผ ์ถ๊ฐํ๊ณ  h1ํ๊ทธ์ ์ถ๋ ฅํ์ธ์
    //๋ฒํผ์ ๋๋ ์ ๋ name๊ฐ์ ์ฑ์ถํฅ์ผ๋ก ๋ฐ๊ฟ์ ์ถ๋ ฅํ์ธ์
    const [name, setName] = useState('ํ๊ธธ๋');

    
    return (
        <>
            <h1>{number}</h1>
            <button onClick={()=> {
                setNumber(number +1)
            }}>
                +1
            </button>
            <h1>{name}</h1>
            <button onClick={()=> {
                setName('์ฑ์ถํฅ')
            }}>
                ์ด๋ฆ์ด ๋ฐ๋๋๋ค.
            </button>

        </>
    )
}

export default ArrowState;