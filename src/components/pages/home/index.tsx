import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Flex} from "antd";

const HomePage: FC = () => {
    const navigate = useNavigate();

    const onButtonClickHandler = () => {
        navigate("/dashboard");
    };
    return (
        <Flex>
            <Button onClick={onButtonClickHandler}>
                dddd
            </Button>
        </Flex>
    );
};

export default HomePage;
