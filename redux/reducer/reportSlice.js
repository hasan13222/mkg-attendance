import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feesModalVisible: false,
    attendanceModalVisible: false,
    dueModalVisible: false,
    AccByDateModalVisible: false,
    accByMonthVisible: false,
}

export const reportSlice = createSlice({
    name: "reportSlice",
    initialState: initialState,
    reducers: {
        setFeesModalVisible(state){
            state.feesModalVisible = !state.feesModalVisible
        },
        setAttendanceModalVisible(state){
            state.attendanceModalVisible = !state.attendanceModalVisible
        },
        setDueModalVisible(state){
            state.dueModalVisible = !state.dueModalVisible
        },
        setAccByDateModalVisible(state){
            state.AccByDateModalVisible = !state.AccByDateModalVisible
        },
        setAccByMonthVisible(state){
            state.accByMonthVisible = !state.accByMonthVisible
        },
    }
})


export const {setFeesModalVisible, setAttendanceModalVisible, setDueModalVisible, setAccByDateModalVisible, setAccByMonthVisible} = reportSlice.actions;

export default reportSlice.reducer;