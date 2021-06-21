import {createStore, action} from 'easy-peasy'


const store = createStore({
    array1: [],
    array2: [],
    array3: [],
    detArray1: [],
    detArray2: [],
    detArray3: [],
    vectorB: [],
    accepted: false,
    calculate: false,
    stepThree: false,
    setArray1: action((state, payload) => {
        state.array1 = payload;
    }),
    setArray2: action((state, payload) => {
        state.array2 = payload;
    }),
    setArray3: action((state, payload) => {
        state.array3 = payload;
    }),
    setAcceptedButton: action((state, payload) => {
        state.accepted = payload;
    }),
    setCalculate: action((state, payload) =>{
        state.calculate = payload;
    }),
    setDetArray1: action((state, payload)=> {
        state.detArray1 = payload
    }),
    setDetArray2: action((state, payload)=> {
        state.detArray2 = payload
    }),
    setDetArray3: action((state, payload)=> {
        state.detArray3 = payload
    }),
    setVectorB: action((state, payload)=> {
        state.vectorB = payload
    }),
    setStepThree: action((state, payload) => {
        state.stepThree = payload
    })
}, {initialState: {
    array1: [],
    array2: [],
    array3: [],
    accepted: false,
    calculate: false
}, name: "Store"})


export default store