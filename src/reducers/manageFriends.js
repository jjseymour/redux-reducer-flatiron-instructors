export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.payload], numberOfPresents: state.numberOfPresents}
    case "REMOVE_FRIEND":
      let newFriend = state.friends.filter((friend)=>{
      return friend.id !== action.payload
      })
      return {friends: newFriend, numberOfPresents: state.numberOfPresents}
    default:
      return state 
  }
}
