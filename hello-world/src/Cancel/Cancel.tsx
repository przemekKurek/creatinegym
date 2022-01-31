import { createField, createForm } from "mobx-easy-form";
import { Observer } from "mobx-react";
import { TextField, Button, Typography } from "@mui/material";
import { useMemo } from "react";

export default function App() {
  const { form, ClientID, MembershipID} = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        alert("values" + JSON.stringify(values, null, 2));
      }
    });

    const ClientID = createField({
      id: "Client ID",
      form,
      initialValue: ""
    });

    const MembershipID = createField({
      id: "Memebership Card ID",
      form,
      initialValue: ""
    });

    return { form, ClientID, MembershipID };
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