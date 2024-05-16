import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Avatar, Button, Col, Flex, Layout, List, Menu, message, Row, Tabs, TabsProps, Typography} from "antd";
import CustomTable from "../../customTable";
import React, {useEffect, useState} from "react";
import {MarketsGet} from "../../../services/api/markets";
import {OrderGet, SellGet, TradesGet} from "../../../services/api/actives";
import {ISearchResponseContent} from "@/types/base";
import {IMarketsTypeResponse} from "../../../services/api/markets/markets.type";

const Task2: FC = () => {
    const navigate = useNavigate();
    const {Text, Link} = Typography;
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>();
    const [dataSell, setDataSell] = useState<any>();
    const [dataTrades, setDataTrades] = useState<any>();

    useEffect(() => {
        OrderGet().then(async data => {
            setLoading(false)
            if (data.successful && data) {
                setData(data)
                setLoading(false)
                return
            } else {
                await messageApi.open({
                    type: 'error',
                    duration: 2,
                    content: 'دریافت لیست امکان پذیر نیست',
                });
            }
        })

    }, [])

    const GetSellHandler = () => {
        SellGet().then(async data => {
            setLoading(false)
            if (data.successful && data) {
                setDataSell(data)
                setLoading(false)
                return
            } else {
                await messageApi.open({
                    type: 'error',
                    duration: 2,
                    content: 'دریافت لیست امکان پذیر نیست',
                });
            }
        })
    }
    const GetTradesHandler = () => {
        TradesGet().then(async data => {
            setLoading(false)
            if (data.successful && data) {
                setDataSell(data)
                setLoading(false)
                return
            } else {
                await messageApi.open({
                    type: 'error',
                    duration: 2,
                    content: 'دریافت لیست امکان پذیر نیست',
                });
            }
        })
    }

    const onChange = (key: string) => {
      if(key === '2' && !dataSell ){
          GetSellHandler()
      }
      if(key === '3' && !dataTrades  ){
          GetTradesHandler()
      }
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <Text style={{margin: '0 16px'}}> لیست سفارشات خرید </Text>,
            children: <List
                itemLayout={"horizontal"}
                loading={loading}
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />,
        },
        {
            key: '2',
            label: <Text style={{margin: '0 16px'}}>سفارشات فروش </Text>,
            children: <List
                itemLayout={"horizontal"}
                loading={loading}
                dataSource={dataSell}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />,
        },
        {
            key: '3',
            label: <Text style={{margin: '0 16px'}}>معامالت </Text>,
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <>
            <Layout style={{height: '100%', width: '100%'}} dir={'rtl'}>
                {contextHolder}
                <Button onClick={() => {
                    navigate('/')
                }}>صفحه ی اول</Button>
                <Row align="middle" justify={'space-around'} gutter={[24, 24]} style={{height: '100%', width: '100%'}}>
                    <Tabs defaultActiveKey={"1"} centered items={items} onChange={onChange}
                          style={{width: '100%', height: '100%'}}/>
                </Row>
            </Layout>
        </>
    )
};

export default Task2;
