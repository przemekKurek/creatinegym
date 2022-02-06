import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import './Cancel.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const { form, ClientID, MembershipID} = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {        
        axios.delete('/getOut', {data: {
          customerId:  values.ClientID,
          membershipId: values.membershipID
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

    const MembershipID = createField({
      id: "membershipID",
      form,
      initialValue: ""
    });

    return { form, ClientID, MembershipID };
  }, []);

  return (
    <div>
    <div className = 'cancel-form'>
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
              value={MembershipID.state.value}
              onChange={(e) => MembershipID.actions.onChange(e.target.value)}
              onFocus={() => MembershipID.actions.onFocus()}
              onBlur={() => MembershipID.actions.onBlur()}
              label={"Membership Card ID"}
              error={!!MembershipID.computed.ifWasEverBlurredThenError}
              helperText={MembershipID.computed.ifWasEverBlurredThenError}
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
    <Button
      className = "number-button">
        Fajny przypadek
      </Button>
    </div>
  );
}