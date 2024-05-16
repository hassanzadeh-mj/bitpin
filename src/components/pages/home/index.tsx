import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Flex, Layout, message, Row} from "antd";
import {useEffect, useLayoutEffect, useState} from "react";
import {ISearchRequest, ISearchResponseContent} from "@/types/base";
import {MarketsGet} from "../../../services/api/markets";
import {IMarketsTypeRequest} from "../../../services/api/markets/markets.type";

const HomePage: FC = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [request, setRequest] = useState<IMarketsTypeRequest>({});

    const [data, setData] = useState<ISearchResponseContent<any>>({
        count: 0,
        next: 0,
        previous: 0,
        results: [],
        size: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        MarketsGet(request).then(async data => {
            setLoading(false)
            if (data.successful) {
                setData(prv => data.content ?? prv)
                return
            } else {
                await messageApi.open({
                    type: 'error',
                    duration: 2,
                    content: 'دریافت لیست بازار ها امکان پذیر نیست',
                });
            }
        })

    }, [request])
    return (
        <>
            <Layout className={'nb-first-layout'}>
                {contextHolder}
                <Row align="middle" wrap={false} justify={'space-around'} gutter={[24, 24]} style={{height: '100%'}}>
                    <Col span={24} md={12}>

                    </Col>
                    <Col span={24} md={12}>

                    </Col>
                </Row>
            </Layout>
        </>
    )
};

export default HomePage;
