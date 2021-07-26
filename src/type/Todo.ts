export type Todo = {
    id: number,
    title: string,
    detail: string,
    dueDate: string
}

export type TodoList = {
    value: Todo[]
}
