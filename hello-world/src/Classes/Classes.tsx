import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import './Classes.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const { form, EmployeeID, startTime, endTime, roomID } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {        
        axios.post('/bookClass',{
          //nwm czy bookClasses może byc uzyty do create classes bo imo oba endpointy będą inne. Book do requesta a create do stworzenia zajęć. Na razie zostawiam co jest.
          roomId: values.roomID,
          employeeId: values.EmployeeID,
          startHour: values.startTime,
          endHour: values.endTime
        }).then(() => {
          navigate('/')
        })

      }
    });

    const EmployeeID = createField({
      id: "EmployeeID",
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

    return { form, EmployeeID, startTime, endTime, roomID };
  }, []);

  return (
    <div className = 'classes-form'>
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
              className = "form-button"
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