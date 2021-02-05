import { INPUT_NUMBER, PLUS, MINUS, MULTIPLY, DIVIDE, EQUAL, CLEAR,} from '../actions/types'

const initialAppState = {
    inputValue:0,
    operator:'',
    resultValue: 0,
    //計算を行うかどうかの判断
    calculate: false,
    showingResult: false,
}

const calculator = (state=initialAppState,action)=>{
    switch(action.type){
        case INPUT_NUMBER:
            return{
                ...state,
                inputValue: state.inputValue*10 + action.number,
                showingResult: false,
            }
 
        case PLUS:
            if(state.calcurate===true){
                return{
                    ...state,
                    inputValue:0,
                    operator: '+',
                    resultValue: state.resultValue + state.inputValue,
                    showingResult: true,
                }
            }else{
                return{
                    ...state,
                    inputValue:0,
                    operator: '+',
                    calculator: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                }
            }
            case MINUS:
                if(state.calcurate===true){
                    return{
                        ...state,
                        inputValue:0,
                        operator: '-',
                        resultValue: state.resultValue - state.inputValue,
                        showingResult: true,
                    }
                }else{
                    return{
                        ...state,
                        inputValue:0,
                        operator: '-',
                        calculator: true,
                        resultValue: state.inputValue,
                        showingResult: true,
                    }
                }
                case MULTIPLY:
                    if(state.calcurate===true){
                        return{
                            ...state,
                            inputValue:0,
                            operator: '*',
                            resultValue: state.resultValue * state.inputValue,
                            showingResult: true,
                        }
                    }else{
                        return{
                            ...state,
                            inputValue:0,
                            operator: '*',
                            calculator: true,
                            resultValue: state.inputValue,
                            showingResult: true,
                        }
                    }
                    case DIVIDE:
                        if(state.calcurate===true){
                            return{
                                ...state,
                                inputValue:0,
                                operator: '/',
                                resultValue: state.resultValue / state.inputValue,
                                showingResult: true,
                            }
                        }else{
                            return{
                                ...state,
                                inputValue:0,
                                operator: '/',
                                calculator: true,
                                resultValue: state.inputValue,
                                showingResult: true,
                            }
                        }
                        case CLEAR:
                            return{
                                inputValue: 0,
                                operator: '',
                                calcurator: false,
                                resultValue: 0,
                                showingResult: false,
                            }

                        case EQUAL:
                            switch(state.operator){
                                case '+':
                                    return{
                                        inputValue: state.resultValue + state.inputValue,
                                        operator: '',
                                        calculator: false,
                                        resultValue: state.resultValue + state.inputValue,
                                        showingResult: true,
                                    }
                                case '-':
                                    return{
                                        inputValue: state.resultValue - state.inputValue,
                                        operator: '',
                                        calculator: false,
                                        resultValue: state.resultValue - state.inputValue,
                                        showingResult: true,
                                    }
                                case '*':
                                    return{
                                        inputValue: state.resultValue * state.inputValue,
                                        operator: '',
                                        calculator: false,
                                        resultValue: state.resultValue * state.inputValue,
                                        showingResult: true,
                                    }    
                                 case '/':
                                    return{
                                        inputValue: state.resultValue / state.inputValue,
                                        operator: '',
                                        calculator: false,
                                        resultValue: state.resultValue / state.inputValue,
                                        showingResult: true,
                                    }
                                    default:
                                        return state;
                            }    
                            default:
                                return state;
        }
}

export default calculator
