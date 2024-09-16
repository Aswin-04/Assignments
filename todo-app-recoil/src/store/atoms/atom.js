import {atom, selector, useRecoilValue} from "recoil"

export const inputTitleState = atom({
  key: "inputTitleState",
  default: ""

})

export const inputDescriptionState = atom({
  key: "inputDescriptionState",
  default: ""
})

export const inputFilterState = atom({
  key: "inputFilterState",
  default: ""
})

export const filteredTodoState = selector({
  key: "filteredTodoState",
  get: ({get}) => {
    const todos = get(todoListState)
    const filterVal = get(inputFilterState)

    if(!filterVal) return todos

    return todos.filter(
      (todo) => (
        todo.title.toLowerCase().includes(filterVal.toLowerCase()) || 
        todo.description.toLowerCase().includes(filterVal.toLowerCase())
    ))
  } 
})

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      title: "Buy Groceries",
      description: "Purchase fruits, vegetables, and dairy products from the store."
    },
    {
      title: "Complete Project Report",
      description: "Finalize the draft and submit the project report by 5 PM."
    },
    {
      title: "Exercise",
      description: "Go for a 30-minute run in the morning."
    },
    {
      title: "Read Book",
      description: "Read two chapters from 'Atomic Habits' in the evening."
    },
    {
      title: "Clean House",
      description: "Vacuum the living room and clean the kitchen surfaces."
    },

  ]
})