import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import * as yup from "yup";

export default function App() {
  const { form, firstName, lastName, memType, pohNum } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        alert("values" + JSON.stringify(values, null, 2));
      }
    });

    const firstName = createField({
      id: "firstName",
      form,
      initialValue: ""
    });

    const lastName = createField({
      id: "lastName",
      form,
      initialValue: ""
    });

    const memType = createField({
      id: "initials",
      form,
      initialValue: ""
    });

    const pohNum = createField<string, number>({
      id: "age",
      form,
      initialValue: ""
    });

    return { form, firstName, lastName, memType, pohNum };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        maxWidth: "600px",
        gridTemplateColumns: "1fr",
        gridRowGap: "12px",
        marginLeft: "650px",
        marginTop: "300px"
      }}
    >
      <Typography variant="h6">User info</Typography>

      <Observer>
        {() => {
          return (
            <TextField
              value={firstName.state.value}
              onChange={(e) => firstName.actions.onChange(e.target.value)}
              onFocus={() => firstName.actions.onFocus()}
              onBlur={() => firstName.actions.onBlur()}
              label={"First name"}
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
              label={"Last name"}
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
              value={memType.state.value}
              onChange={(e) => memType.actions.onChange(e.target.value)}
              onFocus={() => memType.actions.onFocus()}
              onBlur={() => memType.actions.onBlur()}
              label={"Membership Card Type"}
              error={!!memType.computed.ifWasEverBlurredThenError}
              helperText={memType.computed.ifWasEverBlurredThenError}
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