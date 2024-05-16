import React from "react";
import {TableProps} from "antd/lib";
import {Button, Col, Empty, Row, Spin, Table, theme, Typography} from "antd";
import {Loading3QuartersOutlined} from "@ant-design/icons";
import {ISearchResponseContent} from "@/types/base";

const {useToken} = theme

interface IProps extends TableProps<any> {
    data: ISearchResponseContent<any> | null,
    failed?: boolean,
    loading?: boolean,
}

const CustomTable: React.FC<IProps> = (props) => {
    const {token} = useToken()
    const { Text, Link } = Typography;
    const prop: IProps = {
        ...props,
        pagination: props.data?.pages! > 1 && {
            defaultPageSize: 10,
            defaultCurrent: 1,
            current: props.data?.page,
            position: ["bottomCenter"],
            showLessItems: true,
            showSizeChanger: props.data?.count! > props.data?.size!,
            nextIcon: <Text>بعدی</Text>,
            prevIcon: <Text>قبلی</Text>,
            pageSize: props.data?.size,
            ...props.pagination,
            total: props.data?.count,
        },
        style: {
            border: '1px solid rgba(33, 101, 2, 0.18)',
            borderRadius: '8px',
            overflow: 'hidden',
            ...props.style
        },
        dataSource: props.data?.results?.map((item: { id: any; }, i: any) => ({...item, key: item.id ?? i}))
    }

    function showLoading() {
        return (
            <Row gutter={[0, 8]}>
                <Col span={24}>
                    <Row justify={'center'} style={{width: '100%'}}>
                        <Col>
                            <Spin size={'large'} style={{color: token.colorText}}
                                  indicator={<Loading3QuartersOutlined spin/>}/>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row justify={'center'} style={{width: '100%'}}>
                        <Col>
                            <p style={{zIndex: 2, color: token.colorText}}> لطفا چند لحظه صبر کنید ... </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    return (
        <Col span={24}>
            {props.failed ? (
                    <Empty>
                        <Row justify={'center'}>
                            <Col>
                                <Button > درخواست مجدد</Button>
                            </Col>
                        </Row>
                    </Empty>
                )
                : <Table {...prop}/>
            }
        </Col>
    )
}


export default CustomTable;
