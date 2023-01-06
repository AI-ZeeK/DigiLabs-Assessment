import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateAPI } from "../api/AppService";

export const updateItems = createAsyncThunk(
	"/post",
	async (routeData: any, thunkAPI) => {
		try {
			await console.log(routeData);
			return await updateAPI(routeData);
		} catch (error: any) {
			console.log("Big Appslice Error");
			console.log(routeData);
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
interface Type {
	counter: Number;
	showCount: any;
	files: any;
	text: string;
	isModal: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	messages: any;
	responseData: any;
}

const initialState: Type = {
	counter: 0,
	showCount: false,
	files: [],
	text: "",
	isModal: false,
	isLoading: false,
	isSuccess: false,
	messages: "",
	responseData: [],
};
const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setCounter: (state: any) => {
			state.counter = state.counter + 1;
			console.log(state.counter);
		},
		setShowCount: (state: any, { payload }: any) => {
			state.showCount = payload;
		},
		setFiles: (state: any, { payload }: any) => {
			state.files = payload;
			// console.log(payload);
		},
		setText: (state: any, { payload }: any) => {
			state.text = payload;
			// console.log(payload);
		},
		setIsModal: (state: any) => {
			state.isModal = true;
		},
		closeModal: (state: any) => {
			state.isModal = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateItems.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.responseData = [payload];
			})
			.addCase(updateItems.rejected, (state, action) => {
				// state.isLoading = false;
				// state.isError = true;
				state.messages = action.payload;
				console.log(state.messages);
			});
	},
});

// Action creators are generated for each case reducer function
export const {
	setCounter,
	setShowCount,
	setFiles,
	setIsModal,
	closeModal,
	setText,
}: any = appSlice.actions;

export default appSlice.reducer;
