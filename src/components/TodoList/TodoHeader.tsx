import { TableCell, TableHead, TableRow } from '@material-ui/core'

export const TodoHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>タスク名</TableCell>
                <TableCell>詳細</TableCell>
                <TableCell>期限</TableCell>
            </TableRow>
        </TableHead>
    )
}
