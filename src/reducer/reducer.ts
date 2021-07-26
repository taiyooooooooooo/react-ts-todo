import { Todo } from "../type/Todo";

export type State = { todos: Todo[] }
export type Action = { type: "dummy" }

export const initialState: State = {
    todos: [{
        id: 1,
        title: "テスト１",
        detail: "詳細",
        dueDate: new Date('2021-01-01').toDateString()
    }]
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}
