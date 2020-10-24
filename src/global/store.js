import {createStore} from 'redux'

const data = {
  theme: 'light',
}

const reducer = (state = data, action) =>{
  console.log(action.theme)
  switch (action.type){
    case 'changeTheme':
      return {...state, theme:action.theme}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store;