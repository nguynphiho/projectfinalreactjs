import {
    FormControl,
    makeStyles, MenuItem, Select
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        minWidth: 100,
    },
}))

function SelectInputCustom({empty, listItem}) {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const classes = useStyles();
    return (
        <>
            <FormControl variant="outlined" className={classes.formControl} size="small">
                <Select
                    className={classes.select}
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>{empty}</em>
                    </MenuItem>
                    {
                        listItem.map((item) => (
                            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default SelectInputCustom