import { createSlice } from '@reduxjs/toolkit'
const showcaseSlice = createSlice({
  name: 'showcase',
  initialState: {
    products: [
      {
        id: 1,
        title: 'Туалетная вода Dior',
        descr: 'Описание товара',
        price: '1100 Р'
      },
      {
        id: 2,
        title: 'Туалетная вода Faradenza',
        descr: 'Описание товара',
        price: '3000 Р'
      },
      { id: 3, title: 'Спирт', descr: 'Описание товара', price: '5100 Р' },
      { id: 4, title: 'Туалетная вода ', descr: 'скоро', price: '200 Р' }
    ],
    shopsArr: [
      { id: 1, title: 'fitness pro' },
      { id: 2, title: 'fitness two' },
      { id: 3, title: 'fitness three' },
      { id: 4, title: 'fitness f' },
      { id: 5, title: 'fitness 45' },
      { id: 6, title: 'fiton1' }
    ]
  },
  reducers: {}
})
export default showcaseSlice.reducer
