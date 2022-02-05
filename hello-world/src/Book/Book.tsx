import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Book.css';

export default function App() {
  const navigate = useNavigate();
  const { form, BranchID, ClientID, date, classType } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) { 
        //to powinien być endpoint do tworzenia samego requesta imo, więc zrobiłem go tak jak tabelka wygląda i dodałem na bazie kolumne description.        
        axios.post('/bookClass', {data: {
          customerId:  values.ClientID,
          requestType: 3,
          description: "1. Branch Id: " + values.BranchID.toString() + " 2. Clients ID: " + values.ClientID.toString() + " 3. Classes Date: " + values.date.toString() + " 4. Class Type: " + values.classType.toString()
        }}).then(() => {
          navigate('/')
        })

      }
    });

    const BranchID = createField({
      id: "BranchID",
      form,
      initialValue: ""
    });

    const ClientID = createField({
      id: "ClientID",
      form,
      initialValue: ""
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

    return { form, BranchID, ClientID, date, classType };
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
              value={ClientID.state.value}
              onChange={(e) => ClientID.actions.onChange(e.target.value)}
              onFocus={() => ClientID.actions.onFocus()}
              onBlur={() => ClientID.actions.onBlur()}
              label={"Client ID"}
              error={!!ClientID.computed.ifWasEverBlurredThenError}
              helperText={ClientID.computed.ifWasEverBlurredThenError}
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