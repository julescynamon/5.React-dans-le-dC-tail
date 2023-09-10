export default function Password({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="password" className="text-slate-50">
        Votre Mot de passe - Au moins 1 chiffre et 6 caractères
      </label>
      <input
        type="password"
        id="password"
        className="rounded w-full p-1 mt-2 mb-1 text-slate-700"
        value={inputsStates.password}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            password: e.target.value,
          })
        }
      />

      {showValidation.password && (
        <p className="text-red-600 mb-3">
          Votre password doit avoir au moins 1 chiffre et 6 caractère
        </p>
      )}
    </>
  );
}
