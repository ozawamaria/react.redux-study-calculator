import { INPUT_NUMBER, PLUS, MINUS, MULTIPLY, DIVIDE, EQUAL, CLEAR,} from './types'

//「数字」が押されたときのアクション
export const onNumberClick=(number)=>({
    type: INPUT_NUMBER,
    number,
})
//「+」が押されたときのアクション
export const onPlusClick=()=>({
    type: PLUS,
})

//「-」が押されたときのアクション
export const onMinusClick=()=>({
    type: MINUS,
})

//「×」が押されたときのアクション
export const onMultiplyClick=()=>({
    type: MULTIPLY,
})

//「÷」が押されたときのアクション
export const onDivideClick=()=>({
    type: DIVIDE,
})

//「=」が押されたときのアクション
export const onEqualClick=()=>({
    type: EQUAL,
})

//「AC」が押されたときのアクション
export const onClearClick=()=>({
    type: CLEAR,
})