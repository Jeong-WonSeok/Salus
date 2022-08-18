import axios from "axios";
import { useCallback, useState } from "react";

// 세부 요청을 보내는 http 커스텀 훅
// 만약, 무조건 redux에 상태 정보가 저장되도록 하려면, api-request 폴더에 훅을 활용해 여러가지 요청을 미리 만들어둘 것
const useHttp = () => {
  const [error, setError] = useState(null);
  // apiReqeust({url: ??, method: ??, headers: ??, data: ??}, 데이터를 인자 하나로 받아갈 함수)  => UseEffect를 이용해 사용하시오
  const apiRequest = useCallback(async (config, dataFunc) => {
    setError(null);
    axios({
      url: config.url,
      method: config.method ? config.method : "get",
      headers: config.headers ? config.headers : {},
      data: config.data ? config.data : null,
    })
      .then((res) => {
        dataFunc(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return {
    error,
    apiRequest,
  };
};

export default useHttp;
