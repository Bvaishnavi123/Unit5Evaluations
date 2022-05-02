//Action Types:
export const LOGIN = "LOGIN";
export const ALL_DATA = "ALL_DATA";
export const FILTER_DATA ="FILTER_DATA";

//Action Creators:
export const userLogin = (payload) => ({ type: LOGIN, payload:payload });
export const showAllData = (payload) => ({ type: ALL_DATA, payload:payload });
export const filterData = (by) => ({ type: FILTER_DATA, payload:by})