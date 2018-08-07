
const initialState = {
    simpleData:[],
    simpleInput:'',
    simpleIndex:-1,

    advancedData:[],
    advancedClassIndex:-1,
    advancedIndex:-1,
    
    patent:{},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ('simpleData'):
            return {
                ...state,
                simpleData:action.data
            }
        case ('simpleInput'):
            return {
                ...state,
                simpleInput:action.input
            }
        case ('simpleIndex'):
            return {
                ...state,
                simpleIndex:action.index,
                patent:state.simpleData[action.index]
            }
        case ('advancedData'):
            return {
                ...state,
                advancedData:action.data
            }
        case ('advancedClassIndex'):
            return {
                ...state,
                advancedClassIndex:action.classIndex
            }
        case ('advancedIndex'):
            return {
                ...state,
                advancedIndex:action.index,
                patent:state.advancedData[state.advancedClassIndex].patents[action.index]
            }
    }
}

export default reducer