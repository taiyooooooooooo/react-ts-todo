import ActionAccessibility from "material-ui/svg-icons/action/accessibility";
import { Todo } from "../type/Todo";

export type Payload = { inputValue: Todo }
export type State = { todos: Todo[] }
export enum ActionType { ADD_ACTION = "ADD" }
export type Action = { type: ActionType, payload: Payload }

export const initialState: State = {
    todos: [{
        id: 1,
        title: "テスト１",
        detail: "詳細",
        dueDate: new Date('2021-01-01').toDateString()
    }]
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.ADD_ACTION:
            const todos = state.todos.slice()
            todos.push(action.payload.inputValue)
            console.log('★★', todos, '★★')
            return {
                ...state,
                todos: todos
            }
        default:
            return state
    }
}
