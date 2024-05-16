import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    data: null,
    flag: false,
    flagMeno: false,
    collapsed: true,
    searchFlag: false,
    isDarkMode: false
};

function setItem(state: { data: any; }, data: any) {

    state.data = data
}


const handlerChangeTheme = (state: any, x: boolean) => {
    state.isDarkMode = x
}

const itemSlice : any = createSlice({
    name: "Item",
    initialState,
    reducers: {
        setItem,
        handlerChangeTheme: (state, action) => {
            handlerChangeTheme(state, action.payload)
        },
    }
});
export const {
    setItem: setItemAction,
    handlerShowSearch: handlerShowSearchAction,
    handlerChangeTheme: handlerChangeThemeAction
} = itemSlice.actions
export default itemSlice.reducer;
