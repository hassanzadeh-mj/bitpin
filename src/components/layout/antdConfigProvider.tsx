import React, {PropsWithChildren, useEffect, useState} from "react";
import {ConfigProvider, Grid, theme} from "antd";
import {SeedToken} from "antd/lib/theme/interface";
import {SizeType} from "antd/lib/config-provider/SizeContext";
import Orientation from "./orientation";
import {JalaliLocaleListener} from "antd-jalali";

const {defaultAlgorithm, darkAlgorithm, defaultSeed} = theme;
const {useBreakpoint} = Grid

const AntdConfigProvider = ({children}: PropsWithChildren) => {


    const [componentSize, setComponentSize] = useState<SizeType>('middle');


    const customSeed: SeedToken = {
        ...defaultSeed,
        colorPrimary: '#216502',
        colorError: '#F90507',
        fontFamily: 'danaFaRegular'
    }
    ConfigProvider.defaultProps = {
        theme: {
            algorithm: defaultAlgorithm,
            token: {
                ...customSeed,
                colorLinkHover: 'rgba(211,224,204,0.5)',
                colorLink: '#4d8435',
                controlOutlineWidth: 0
            },
            components: {
                Typography: {
                    colorTextHeading: '#4d8435',
                },
                Menu: {
                    itemActiveBg: '#D3E0CC',
                    itemHoverBg: 'rgba(211,224,204,0.5)',
                    itemSelectedBg: '#D3E0CC',
                    colorFillContent: 'black'
                },
                Dropdown: {
                    controlItemBgHover: 'rgba(211,224,204,0.5)',
                },
                Select: {
                    controlItemBgActive: '#D3E0CC',
                    controlItemBgHover: 'rgba(211,224,204,0.5)',
                    colorBgTextHover: '#216502',
                    colorIcon: '#216502',
                },
                Table: {
                    colorTextHeading: '#216502',
                    controlItemBgActive: 'rgba(211,224,204,0.5)',
                    controlItemBgActiveHover: 'rgba(211,224,204,0.5)',
                }
            }
        },
        componentSize: componentSize,
    }

    return (
        <ConfigProvider>
            <JalaliLocaleListener/>
            <Orientation />
            {children}
        </ConfigProvider>

    )
}
export default AntdConfigProvider
