const initialState = {
  age: 20
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_UP") {
    newState.age += action.value;
    newState.loading = false;
  }
  if (action.type === "AGE_DOWN") {
    newState.age -= action.value;
  }
  if (action.type === "LOADING") {
    newState.loading = true;
  }
  return newState;
};

export default Reducer;
