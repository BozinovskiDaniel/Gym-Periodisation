import React, { useState } from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function StepOne(props) {
  const classes = useStyles();
  const { setCurrentSection } = props;

  const [value, setValue] = useState(3);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Step-One">
      <Heading text={"Step 1: Select Your Days Per Week"} />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Days</InputLabel>
        <Select
          native
          value={value}
          onChange={handleChange}
          label="Days"
          inputProps={{
            name: "days",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </Select>
      </FormControl>

      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Next"}
      />
    </div>
  );
}

export default StepOne;
