import { useState } from "react";
import Pseudo from "./Pseudo";
import Password from "./Password";
import Confirmation from "./Confirmation";

export default function Validation() {
  const [inputsStates, setInputsStates] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });
  console.log(inputsStates);
  function handleSubmit(e) {
    e.preventDefault();

    if (validationCheck()) {
      console.log("envoie du formulaire");
    }
  }

  function validationCheck() {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };

    if (inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }

    if (inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if (inputsStates.passwordConfirmation !== inputsStates.password) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      areValid.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }

    if (Object.values(areValid).every((value) => value)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-20">
        Validation de formulaire en react
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto border p-10 rounded"
      >
        <h3 className="text-slate-100 text-xl mb-6">
          Créez votre nom d'utilisateur et votre mot de passe
        </h3>

        <Pseudo
          inputsStates={inputsStates}
          setInputsStates={setInputsStates}
          showValidation={showValidation}
        />
        <Password
          inputsStates={inputsStates}
          setInputsStates={setInputsStates}
          showValidation={showValidation}
        />
        <Confirmation
          inputsStates={inputsStates}
          setInputsStates={setInputsStates}
          showValidation={showValidation}
        />

        <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] text-slate-800">
          Valider
        </button>
      </form>
    </div>
  );
}
