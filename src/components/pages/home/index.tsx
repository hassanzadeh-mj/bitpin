import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Flex, Layout, Menu, message, Row} from "antd";
import {useEffect, useLayoutEffect, useState} from "react";
import {ISearchRequest, ISearchResponseContent} from "@/types/base";
import {MarketsGet} from "../../../services/api/markets";
import {IMarketsTypeRequest, IMarketsTypeResponse} from "../../../services/api/markets/markets.type";
import CustomTable from "../../customTable";
import {ColumnType} from "antd/lib/table";
import {logDOM} from "@testing-library/react";

const HomePage: FC = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [request, setRequest] = useState<IMarketsTypeRequest>({});
    const [loading, setLoading] = useState(true);

    const [dataIRT, setDataIRT] = useState<ISearchResponseContent<IMarketsTypeResponse>>({
        count: 0,
        next: 0,
        previous: 0,
        results: [],
        page: 0,
        pages: 0,
        size: 0
    });

    const [dataUSDT, setDataUSDT] = useState<ISearchResponseContent<IMarketsTypeResponse>>({
        count: 0,
        next: 0,
        previous: 0,
        results: [],
        page: 0,
        pages: 0,
        size: 0
    });

    function requestOnChange(page: number) {
        setDataIRT(prv => ({...prv, page: page}))
    }

    function requestOnChangeUSDT(page: number) {
        setDataUSDT(prv => ({...prv, page: page}))
    }


    useEffect(() => {
        MarketsGet(request).then(async data => {
            setLoading(false)
            if (data.successful && data.results && data.count) {

                const IRT = data.results.filter(item => item.currency2.code === 'IRT')
                setDataIRT({
                    count: IRT.length, pages: (IRT.length / 10), page: 1,
                    results: IRT
                })

                const USDT = data.results.filter(item => item.currency2.code === 'USDT')
                setDataUSDT({
                    count: USDT.length, pages: (USDT.length / 10), page: 1,
                    results: USDT
                })


                setLoading(false)
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

    const columns: ColumnType<IMarketsTypeResponse>[] = [
        {
            title: 'ردیف',
            align: 'center',
            dataIndex: 'rows',
            width: 20,
            render: (_, record, index) => ((dataIRT.page - 1) * (dataIRT.size ?? 10) + index) + 1
        },
        {
            title: 'کد پایه',
            align: 'center',
            render: (_, record) => record.currency2.code

        },
        {
            title: 'عنوان',
            dataIndex: 'title_fa',
            align: 'center',
        },
        {
            title: 'لگو',
            dataIndex: 'title_fa',
            align: 'center',
            render: (_, record) => (
                <img src={record.currency2.image} alt={record.currency2.title} width={30} height={30}/>
            )

        },

    ]

    const columnsUSDT: ColumnType<IMarketsTypeResponse>[] = [
        {
            title: 'ردیف',
            align: 'center',
            dataIndex: 'rows',
            width: 20,
            render: (_, record, index) => ((dataIRT.page - 1) * (dataIRT.size ?? 10) + index) + 1
        },
        {
            title: 'کد پایه',
            align: 'center',
            render: (_, record) => record.currency2.code

        },
        {
            title: 'عنوان',
            dataIndex: 'title_fa',
            align: 'center',
        },
        {
            title: 'لگو',
            dataIndex: 'title_fa',
            align: 'center',
            render: (_, record) => (
                <img src={record.currency2.image} alt={record.currency2.title} width={30} height={30}/>
            )

        },

    ]

    return (
        <>
            <Layout style={{height: '100%'}} dir={'rtl'}>
                {contextHolder}
                <Row align="middle" justify={'space-around'} gutter={[24, 24]} style={{height: '100%'}}>
                    <Col span={24} md={12} style={{height: '100%'}}>
                        <CustomTable data={dataIRT}
                                     columns={columns}
                                     pagination={{onChange: requestOnChange}}
                                     loading={loading}
                        />
                    </Col>
                    <Col span={24} md={12}>
                        <CustomTable data={dataUSDT}
                                     columns={columnsUSDT}
                                     pagination={{onChange: requestOnChangeUSDT}}
                                     loading={loading}
                        />
                    </Col>
                </Row>
            </Layout>
        </>
    )
};

export default HomePage;
