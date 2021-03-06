//๐ํ์ดํํจ์๋ก ๋ง๋๋ ์ปดํฌ๋ํธ
//๋ชจ๋๋ก ๋ด๋ณด๋ด๊ธฐ ์ํด ArrowComponent์ ๋ด์์ ๋ด๋ณด๋ธ๋ค

import { PropTypes } from 'prop-types'
import '../css/ArrowComponent.css'

const ArrowComponent = (props)=> {
    //๐ณ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ : ์์ props๋ฅผ ์๋ตํ๊ณ ๋ ์ฌ์ฉํด์ค์์๋ค.
    const { children,name } = props
    return <div className="ArrowComponent">
            <h2>๐ํ์ดํ ํจ์๋ก ๋ง๋  ์ปดํฌ๋ํธ ์๋๋ค.๐</h2>
            {/* props.children์ ํตํด์ vue์ ์ฌ๋กฏ๊ณผ ๊ฐ์ ํํ๋ก ์ฌ์ฉํ  ์์๋ค. */}
            {/*๋น๊ตฌ์กฐํ ๋ฌธ๋ฒ์ ๋ฃ์ง ์์ผ๋ฉด props๋ฅผ ์์ ๋ถ์ฌ์ค์ผํจ! */}
            <p>{children}</p>
            <p>{name}</p>
        </div>;
};
//๐ณApp.js์์ ๊ฐ์ ์ ํด์ฃผ์ง ์์ผ๋ฉด ์๋ ๊ฐ์ผ๋ก ๋ค์ด๊ฐ์ ์ถ๋ ฅ๋๋ค.
ArrowComponent.defaultProps = {
    name : "๊ธฐ๋ณธ์ด๋ฆ",
};

ArrowComponent.propTypes = {
    name : PropTypes.string
};

export default ArrowComponent