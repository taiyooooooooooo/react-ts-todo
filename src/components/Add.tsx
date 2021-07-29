import { Grid, makeStyles, TextField, Button } from "@material-ui/core"
import { useContext } from "react"
import { TodoContext } from "../App"

const useStyles = makeStyles({
    textField: {
        // backgroundColor: 'red'
    },
    form: {
        // backgroundColor: 'blue'
    },
    formGrid: {
        margin: '20px 10px',
        display: 'block'
    }
})

export const Add = () => {
    const { state, dispatch } = useContext(TodoContext)
    const classes = useStyles()
    return (
        <div>
            <form noValidate autoComplete="off" >
                <Grid container className={classes.form}>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField id="title" label="タスク名" className={classes.textField} fullWidth={true} />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField id="detail" label="詳細" className={classes.textField} fullWidth={true} />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <TextField className={classes.textField}
                            id="dueDate"
                            label="期限"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Button variant="contained" color="primary" fullWidth={true}>提出</Button>
                    </Grid>
                </Grid>
            </form>
        </div >
    )
}