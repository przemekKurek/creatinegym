import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import './Book.css';

export default function App() {
  const { form, BranchID, firstName, lastName, pohNum, date, classType } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        alert("values" + JSON.stringify(values, null, 2));
      }
    });

    const BranchID = createField({
      id: "BranchID",
      form,
      initialValue: ""
    });

    const firstName = createField({
      id: "firstName",
      form,
      initialValue: ""
    });

    const lastName = createField({
      id: "lastName",
      form,
      initialValue: ''
    });

    const pohNum = createField<string, number>({
      id: "pohNum",
      form,
      initialValue: ''
    });

    const date = createField<string>({
      id: "date",
      form,
      initialValue: ""
    });

    const classType = createField<string>({
      id: "classType",
      form,
      initialValue: ""
    });

    return { form, BranchID, firstName, lastName, pohNum, date, classType };
  }, []);

  return (
      <div className = 'book-form'>
      <Typography variant="h6">Booking Information</Typography>

      <Observer>
        {() => {
          return (
            <TextField
              value={BranchID.state.value}
              onChange={(e) => BranchID.actions.onChange(e.target.value)}
              onFocus={() => BranchID.actions.onFocus()}
              onBlur={() => BranchID.actions.onBlur()}
              label={"Branch ID"}
              error={!!BranchID.computed.ifWasEverBlurredThenError}
              helperText={BranchID.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={firstName.state.value}
              onChange={(e) => firstName.actions.onChange(e.target.value)}
              onFocus={() => firstName.actions.onFocus()}
              onBlur={() => firstName.actions.onBlur()}
              label={"First Name"}
              error={!!firstName.computed.ifWasEverBlurredThenError}
              helperText={firstName.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={lastName.state.value}
              onChange={(e) => lastName.actions.onChange(e.target.value)}
              onFocus={() => lastName.actions.onFocus()}
              onBlur={() => lastName.actions.onBlur()}
              label={"Last Name"}
              error={!!lastName.computed.ifWasEverBlurredThenError}
              helperText={lastName.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={pohNum.state.value}
              onChange={(e) => pohNum.actions.onChange(e.target.value)}
              onFocus={() => pohNum.actions.onFocus()}
              onBlur={() => pohNum.actions.onBlur()}
              label={"Phone Number"}
              error={!!pohNum.computed.ifWasEverBlurredThenError}
              helperText={pohNum.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={date.state.value}
              onChange={(e) => date.actions.onChange(e.target.value)}
              onFocus={() => date.actions.onFocus()}
              onBlur={() => date.actions.onBlur()}
              label={"Date"}
              error={!!date.computed.ifWasEverBlurredThenError}
              helperText={date.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={classType.state.value}
              onChange={(e) => classType.actions.onChange(e.target.value)}
              onFocus={() => classType.actions.onFocus()}
              onBlur={() => classType.actions.onBlur()}
              label={"Classes's Type"}
              error={!!classType.computed.ifWasEverBlurredThenError}
              helperText={classType.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <Button
              variant="outlined"
              onClick={form.actions.submit}
              disabled={form.computed.isError}
            >
              SUBMIT
            </Button>
          );
        }}
      </Observer>
      </div>
  );
}