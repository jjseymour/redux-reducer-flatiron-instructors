export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      return Object.assign({}, {numberOfPresents: state.numberOfPresents + 1})
    default:
      return state 
  }
}
