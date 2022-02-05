import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Buy.css';

export default function App() {
  const navigate = useNavigate();
  let today = new Date().toLocaleDateString();
  const { form, ClientID , memTypeID} = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {        
        axios.post('/buyCard', {data: {
          date: today,
          customerId:  values.ClientID,
          membershipTypeId: values.memTypeID,
        }}).then(() => {
          navigate('/')
        })

      }
    });

    const ClientID = createField({
      id: "ClientID",
      form,
      initialValue: ""
    });

    const memTypeID = createField({
      id: "memTypeID",
      form,
      initialValue: ""
    });

    return { form, ClientID, memTypeID};
  }, []);

  return (
    <div className = 'buy-form'>
      <Typography variant="h6">User info</Typography>

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
              value={memTypeID.state.value}
              onChange={(e) => memTypeID.actions.onChange(e.target.value)}
              onFocus={() => memTypeID.actions.onFocus()}
              onBlur={() => memTypeID.actions.onBlur()}
              label={"Membership Card Type"}
              error={!!memTypeID.computed.ifWasEverBlurredThenError}
              helperText={memTypeID.computed.ifWasEverBlurredThenError}
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