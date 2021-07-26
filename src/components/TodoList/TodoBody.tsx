import { TableCell, TableBody, TableRow } from '@material-ui/core'
import { useContext } from 'react'
import { TodoContext } from '../../App'

export const TodoBody = () => {
    const { state, dispatch } = useContext(TodoContext)

    return (
        <TableBody>
            {state.todos.map((todo) => {
                return (
                    <TableRow>
                        <TableCell>{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>{todo.detail}</TableCell>
                        <TableCell>{todo.dueDate}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
}