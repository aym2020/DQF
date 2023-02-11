import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import RulesAPI from 'plugins/rulesAPI'

// First, create the thunk
export const fetchConstants = createAsyncThunk(
  'constants/fetch',
  async (_) => {
    const response = await RulesAPI.get('constants')
    return response.data
  }
)

interface DataDimension {
  key: string
  value: string
}

interface Constants {
  dataDimensions: DataDimension[]
}

export interface ConstantsState {
  value: Constants
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ConstantsState = {
  value: {
    dataDimensions: []
  },
  loading: 'idle'
}

// Then, handle actions in your reducers:
const constantsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConstants.fulfilled, (state, action) => {
      state.value = action.payload
    })
  }
})

export default constantsSlice.reducer
