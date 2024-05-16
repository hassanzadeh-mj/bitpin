import type { FC } from "react";
import {Flex} from "antd";

const message = "متأسفانه صفحه مورد نظر شما وجود ندارد.";

const ErrorPage: FC = () => {
  return <Flex justify={'center'} align={'center'} style={{width : '100%', height : '100%'}} id="error-page">{message}</Flex>;
};

export default ErrorPage;
