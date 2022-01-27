import { createField, createForm } from "mobx-easy-form";
import { Observer, observer } from "mobx-react";
import { useMemo } from "react";

export default observer(function Form() {
  const { form, branch, firstName, lastName, initials, age, classes } = useMemo(() => {
    const form = createForm({
      onSubmit({ values }) {
        console.log("Values:", values);
      },
    });

    const branch = createField({
        id: "firstName",
        form,
        initialValue: "",
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

    const classes = createField<string, number>({
        id: "age",
        form,
        initialValue: "",
      });

    return { form, branch, firstName, lastName, initials, age, classes };
  }, []);

  return (
    <div>
      <h1>Booking info</h1>

      <Observer>
        {() => {
          return (
            <div>
              <div>Branch ID</div>
              <input
                value={branch.state.value}
                onChange={(e) => branch.actions.onChange(e.target.value)}
                onFocus={() => branch.actions.onFocus()}
                onBlur={() => branch.actions.onBlur()}
              ></input>
              <div>{branch.computed.ifWasEverBlurredThenError}</div>
            </div>
          );
        }}
      </Observer>


      <Observer>
        {() => {
          return (
            <div>
              <div>First name</div>
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
              <div>Last name</div>
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
              <div>Phone Number</div>
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
              <div>Date</div>
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
              <div>Classes</div>
              <input
                value={classes.state.value}
                onChange={(e) => classes.actions.onChange(e.target.value)}
                onFocus={() => classes.actions.onFocus()}
                onBlur={() => classes.actions.onBlur()}
              ></input>
              <div>{classes.computed.ifWasEverBlurredThenError}</div>
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