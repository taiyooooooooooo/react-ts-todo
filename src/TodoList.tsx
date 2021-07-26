import { useContext } from "react";
import styled from "styled-components"
import { TodoContext } from "./App";
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, makeStyles } from '@material-ui/core'
import { TableBody } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export type Todo = {
    id: number,
    title: string,
    detail: string,
    dueDate: string
}
export type Props = {
    value: Todo[]
}

const useStyles = makeStyles(theme => ({
    table: {
    }
}))

export const TodoList = () => {
    const classes = useStyles();
    const todoContext = useContext(TodoContext);
    const tableBody = <TableBody displayRowCheckbox={false}>
        {todoContext.map((todo) => {
            return (
                <>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{todo.detail}</TableCell>
                    <TableCell>{todo.dueDate}</TableCell>
                </>
            )
        })}
    </TableBody>
    return (
        <MuiThemeProvider>
            <TableContainer className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>タスク名</TableCell>
                            <TableCell>詳細</TableCell>
                            <TableCell>期限</TableCell>
                        </TableRow>
                    </TableHead>
                    {tableBody}
                </Table>
            </TableContainer>
        </MuiThemeProvider >
    )
}
