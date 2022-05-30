import "../util/test.scss";

const Test = (props) => {
  // props을 통해 size를 받아옴
  // className="MyButton large"
  // 배열의 메서드의 join사용하면
  // 쉼표(,)를 안의 값('') 문자열로 바꿔서 문자열로 반환
  return <button className={["MyButton", props.size].join(" ")}>{props.children}</button>;
};
export default Test;