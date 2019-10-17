import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function SwitchServicesButton() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        playbackService: 'Spotify',
        playlistService: 'Apple Music'
    });

    const handleChange = name => event => {
        setState({...state, [name]: Number(event.target.value) || ''});
    };

    const handleClickOpen = () => {
        setState({...state, open: true});
    };

    const handleClose = () => {
        setState({...state, open: false});
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                Switch Services
                <MoreVertIcon/>
            </IconButton>
            <Dialog open={state.open} onClose={handleClose}>
                <DialogTitle>Change Current Service</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange('age')}
                                input={<Input id="age-native-simple"/>}
                            >
                                <option value=""/>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}