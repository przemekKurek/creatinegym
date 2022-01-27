import { createField, createForm } from "mobx-easy-form";
import { Observer, observer } from "mobx-react";
import { useMemo } from "react";

export default observer(function Form() {
  const { form, firstName, lastName, initials, age, number } = useMemo(() => {
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

    const initials = createField({
      id: "Memebrship Card Type",
      form,
      initialValue: "",
    });

    const age = createField<string, number>({
      id: "age",
      form,
      initialValue: "",
    });

    const number = createField<string, number>({
        id: "number",
        form,
        initialValue: "",
      });

    return { form, firstName, lastName, initials, age, number };
  }, []);

  return (
    <div>
      <h1>New Classes</h1>

      <Observer>
        {() => {
          return (
            <div>
              <div>Employee ID</div>
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
              <div>Classes Name</div>
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
            <div>
              <div>Start Time</div>
              <input
                value={initials.state.value}
                onChange={(e) => initials.actions.onChange(e.target.value)}
                onFocus={() => initials.actions.onFocus()}
                onBlur={() => initials.actions.onBlur()}
              ></input>
              <div>{initials.computed.ifWasEverBlurredThenError}</div>
            </div>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <div>
              <div>End Time</div>
              <input
                value={age.state.value}
                onChange={(e) => age.actions.onChange(e.target.value)}
                onFocus={() => age.actions.onFocus()}
                onBlur={() => age.actions.onBlur()}
              ></input>
              <div>{age.computed.ifWasEverBlurredThenError}</div>
            </div>
          );
        }}
      </Observer>

      <Observer>
        {() => {
          return (
            <div>
              <div>Room ID</div>
              <input
                value={number.state.value}
                onChange={(e) => number.actions.onChange(e.target.value)}
                onFocus={() => number.actions.onFocus()}
                onBlur={() => number.actions.onBlur()}
              ></input>
              <div>{number.computed.ifWasEverBlurredThenError}</div>
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