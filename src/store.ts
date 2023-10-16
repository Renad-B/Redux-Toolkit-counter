import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./components/counterSlice";

export type RootState={
    counterR:ReturnType<typeof counterSlice>;
}

export const Store = configureStore({
    reducer:{
        counterR:counterSlice,
    },
});

export default Store;