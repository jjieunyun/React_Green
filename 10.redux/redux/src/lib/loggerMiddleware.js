//lib : 라이브러리를 모아두는 파일
//loggerMiddleware : 디스패치가 실행될떄 log를 남기는 미들웨어

//store : 리덕스에서 가져온 store(state와 dispatch)
//action : dispatch된 액션
//next : dispatch를 넘겨주는 역할
const loggerMiddleware = store => next => action => {
    //미들웨어의 구조
    console.group(action && action.type);
    console.log('이전상태', store.getState())
    console.log('액션', action)
    next(action);
    console.log('다음상태', store.getState())
    console.groupEnd()
}

export default loggerMiddleware;

// const loggerMiddleware = function loggerMiddleware(store) {
//     return function(next) {
//         return function(action){
//             //미들웨어의 기본구조
//         }
//     }
// }