export default function Pseudo({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="userName" className="text-slate-50">
        Votre Pseudo - 3 à 64 caractères
      </label>
      <input
        type="text"
        id="userName"
        className="rounded w-full p-1 mt-2 mb-1 text-slate-700"
        value={inputsStates.pseudo}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            pseudo: e.target.value,
          })
        }
      />
      {showValidation.pseudo && (
        <p className="text-red-600 mb-3">
          Votre pseudo doit faire 3 à 64 caractère
        </p>
      )}
    </>
  );
}
