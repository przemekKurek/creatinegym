import { createField, createForm } from "mobx-easy-form";
import { Observer, observer } from "mobx-react";
import { useMemo } from "react";

export default observer(function Form() {
  const { form, firstName, lastName} = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        console.log("Values:", values);
      },
    });

    const firstName = createField({
      id: "firstName",
      form,
      initialValue: "",
    });

    const lastName = createField({
      id: "lastName",
      form,
      initialValue: "",
    });

    return { form, firstName, lastName};
  }, []);

  return (
    <div>
      <h1>User info</h1>

      <Observer>
        {() => {
          return (
            <div>
              <div>Client ID</div>
              <input
                value={firstName.state.value}
                onChange={(e) => firstName.actions.onChange(e.target.value)}
                onFocus={() => firstName.actions.onFocus()}
                onBlur={() => firstName.actions.onBlur()}
              ></input>
              <div>{firstName.computed.ifWasEverBlurredThenError}</div>
            </div>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <div>
              <div>Membership Card ID</div>
              <input
                value={lastName.state.value}
                onChange={(e) => lastName.actions.onChange(e.target.value)}
                onFocus={() => lastName.actions.onFocus()}
                onBlur={() => lastName.actions.onBlur()}
              ></input>
              <div>{lastName.computed.ifWasEverBlurredThenError}</div>
            </div>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <button
              onClick={form.actions.submit}
              disabled={form.computed.isError && form.state.submitCount > 0}
            >
              SUBMIT ({form.computed.isError ? "invalid" : "valid"})
            </button>
          );
        }}
      </Observer>
    </div>
  );
});