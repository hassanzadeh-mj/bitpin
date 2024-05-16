import React, {CSSProperties, useEffect, useState} from "react";
import {Col, Row} from "antd";


const Orientation = () => {
    const [landscape, setLandscape] = useState(false)

    useEffect(() => {
        window.addEventListener(`resize`, documentHeight)

        window.addEventListener("orientationchange", async (e: any) => {
            if (!e.currentTarget)
                return;

            documentOrientation(e.currentTarget)
        });

        documentHeight()
        documentOrientation(window)
    }, [])

    const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--height', `${window.innerHeight}px`)
    }

    const documentOrientation = (window: Window) => {
        const landscape = (window.screen?.orientation?.angle ?? window.orientation) === 90 && window.innerWidth < 768
        setLandscape(landscape)
    }

    function addOrientation() {
        const style: CSSProperties = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: landscape ? 10 : 0,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'var(--theme-bg)'
        }

        return (
            <div style={style}>
                <Row gutter={4} style={{
                    display: landscape ? 'flex' : 'none',
                    backgroundColor: '#141414', width: '100%'
                }}
                     justify={'center'} align={'middle'}>
                    <Col style={{marginBottom: 4}}>
                    </Col>
                    <Col style={{fontSize: 16, color: '#fff'}}>
                        لطفا گوشی را به حالت افقی برگردانید.
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        addOrientation()
    )
}

export default Orientation
