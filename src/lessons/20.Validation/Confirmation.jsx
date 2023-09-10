export default function Confirmation({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="passwordConfirmation" className="text-slate-50">
        Veuillez Confirmez le mot de passe
      </label>
      <input
        type="password"
        id="passwordConfirmation"
        className="rounded w-full p-1 mt-2 text-slate-700"
        value={inputsStates.passwordConfirmation}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            passwordConfirmation: e.target.value,
          })
        }
      />

      {showValidation.passwordConfirmation && (
        <p className="text-red-600">Votre password n'est pas le même</p>
      )}
    </>
  );
}
