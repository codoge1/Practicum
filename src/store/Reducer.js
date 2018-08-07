
const initialState = {
    simpleData:[],
    simpleInput:'',
    simpleIndex:-1,

    advancedData:[],
    advancedClassIndex:-1,
    advancedIndex:-1,
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
                simpleIndex:action.index
            }
        case ('advancedData'):
            return {
                ...state,
                advancedInput:action.data
            }
        case ('advancedClassIndex'):
            return {
                ...state,
                advancedClassIndex:action.classIndex
            }
        case ('advancedIndex'):
            return {
                ...state,
                advancedIndex:action.index
            }
    }
}

export default reducer