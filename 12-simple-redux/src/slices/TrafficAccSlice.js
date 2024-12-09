import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";
import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/traffic_acc";

export const getList = createAsyncThunk("TrafficAccSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  let args = { _sort: "id", _order: "desc" };

  try {
    result = await axiosHelper.get(API_URL, args);
  } catch (err) {
    result = rejectWithValue(err);
  }

  return result;
});

const TrafficAccSlice = reduxHelper.getDefaultSlice("TrafficAccSlice", [getList]);

export default TrafficAccSlice.reducer;
