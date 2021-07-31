import { Table, TableContainer } from "@material-ui/core";
import { MuiThemeProvider } from "material-ui/styles";
import { Link } from "react-router-dom";
import { TodoBody } from "./TodoBody";
import { TodoHeader } from "./TodoHeader";

export const TodoListComponent = () => {
    return (
        <MuiThemeProvider>
            <TableContainer>
                <Table>
                    <TodoHeader />
                    <TodoBody />
                </Table>
            </TableContainer>
            <Link to="/Add">追加画面へ</Link>
        </MuiThemeProvider >
    )
}
