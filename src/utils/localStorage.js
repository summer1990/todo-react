
const key = 'todoItems'

export const saveData = (data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  }catch(e) {
    console.log(e)
  }
}

export const readData = () => {
  let items = undefined
  try {
    const itemString = localStorage.getItem(key)
    if(itemString) {
      items = JSON.parse(itemString)
    }
  }catch(e) {
    console.log(e)
  }
  return items
}