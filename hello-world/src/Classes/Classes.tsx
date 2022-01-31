import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";

export default function App() {
  const { form, EmployeeID, className, startTime, endTime, roomID } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        alert("values" + JSON.stringify(values, null, 2));
      }
    });

    const EmployeeID = createField({
      id: "EmployeeID",
      form,
      initialValue: ""
    });

    const className = createField({
      id: "className",
      form,
      initialValue: ""
    });

    const startTime = createField<string, number>({
      id: "startTime",
      form,
      initialValue: ''
    });

    const endTime = createField<string, number>({
      id: "endTime",
      form,
      initialValue: ''
    });

    const roomID = createField<string, number>({
      id: "roomID",
      form,
      initialValue: ''
    });

    return { form, EmployeeID, className, startTime, endTime, roomID };
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
      <Typography variant="h6">Booking Information</Typography>

      <Observer>
        {() => {
          return (
            <TextField
              value={EmployeeID.state.value}
              onChange={(e) => EmployeeID.actions.onChange(e.target.value)}
              onFocus={() => EmployeeID.actions.onFocus()}
              onBlur={() => EmployeeID.actions.onBlur()}
              label={"Employee ID"}
              error={!!EmployeeID.computed.ifWasEverBlurredThenError}
              helperText={EmployeeID.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={className.state.value}
              onChange={(e) => className.actions.onChange(e.target.value)}
              onFocus={() => className.actions.onFocus()}
              onBlur={() => className.actions.onBlur()}
              label={"Class name"}
              error={!!className.computed.ifWasEverBlurredThenError}
              helperText={className.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={startTime.state.value}
              onChange={(e) => startTime.actions.onChange(e.target.value)}
              onFocus={() => startTime.actions.onFocus()}
              onBlur={() => startTime.actions.onBlur()}
              label={"Start Time"}
              error={!!startTime.computed.ifWasEverBlurredThenError}
              helperText={startTime.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={endTime.state.value}
              onChange={(e) => endTime.actions.onChange(e.target.value)}
              onFocus={() => endTime.actions.onFocus()}
              onBlur={() => endTime.actions.onBlur()}
              label={"End Time"}
              error={!!endTime.computed.ifWasEverBlurredThenError}
              helperText={endTime.computed.ifWasEverBlurredThenError}
            ></TextField>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <TextField
              value={roomID.state.value}
              onChange={(e) => roomID.actions.onChange(e.target.value)}
              onFocus={() => roomID.actions.onFocus()}
              onBlur={() => roomID.actions.onBlur()}
              label={"Room ID"}
              error={!!roomID.computed.ifWasEverBlurredThenError}
              helperText={roomID.computed.ifWasEverBlurredThenError}
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