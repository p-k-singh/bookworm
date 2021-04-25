import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Pupload from './Pupload'
import Slider from './Slider'

const Mpdetails = (props) => {
  const {
    name,
    gender,
    email,
    birthday,
    nickname,
    distance,
    mylocation,
    setName,
    setGender,
    setEmail,
    setBirthday,
    setNickname,
    setDistance,
    setMylocation,
  } = props;

  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();

  return (
    <section className="detail">
      <div className="detailContainer">
        <div className="p0">
        <label>Display Picture</label>
        <Pupload></Pupload>
        </div>
        <div className="n1">
          <label>Name </label>
          <input
            type="text"
            autoFocus
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="g2">
          <label>Gender </label>
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
            </RadioGroup>
          </FormControl>
        </div>

        <div className="e3">
          <label>Email </label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="b4">
          <label>Birthday </label>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        <div className="n5">
          <label>Nickname </label>
          <input
            type="text"
            autoFocus
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="l6">
          <label>My Location </label>
          <input
            type="text"
            autoFocus
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="d7">
          <label>Maximum Distance </label>
          <input
            type="text"
            autoFocus
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Slider/>
        </div>
      </div>
    </section>
  );
};

export default Mpdetails;
