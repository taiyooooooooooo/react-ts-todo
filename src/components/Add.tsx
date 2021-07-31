import { Grid, makeStyles, TextField, Button } from "@material-ui/core"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { TodoContext } from "../App"
import { ActionType } from "../reducer/reducer"

const useStyles = makeStyles({
    formGrid: {
        margin: '20px 10px',
        display: 'block'
    }
})

export const Add = () => {
    const { state, dispatch } = useContext(TodoContext)
    const [title, setTitle] = React.useState<string>("")
    const [detail, setDetail] = React.useState<string>("")
    const [dueDate, setDueDate] = React.useState<string>("")
    const classes = useStyles()


    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const maxId = Math.max.apply(null, state.todos.map((todo) => todo.id))
        dispatch(
            {
                type: ActionType.ADD_ACTION,
                payload: {
                    inputValue:
                    {
                        id: maxId + 1,
                        title: title,
                        detail: detail,
                        dueDate: dueDate
                    }
                }
            }
        )
        setTitle("")
        setDetail("")
        setDueDate("")
    }
    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={addTodo}>
                <Grid container>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField
                            name="title"
                            value={title}
                            label="タスク名"
                            fullWidth={true}
                            onChange={e => setTitle(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField
                            name="detail"
                            value={detail}
                            label="詳細"
                            fullWidth={true}
                            onChange={e => setDetail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField
                            name="dueDate"
                            value={dueDate}
                            label="期限"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth={true}
                            onChange={e => setDueDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Button variant="contained"
                            type="submit"
                            color="primary"
                            fullWidth={true}
                        >提出</Button>
                    </Grid>
                </Grid>
            </form>
            <Link to="/">トップ画面へ</Link>
        </div >
    )
}