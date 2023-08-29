import { useState, useEffect } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  const [APIState, setAPIState] = useState({
    data: undefined,
    loading: false,
    error: false,
  });

  let content;
  if (APIState.loading) content = <img src={spinner} alt="loading" />;
  else if (APIState.error) content = <p>Une erreur est survenue...</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <ul>
        {APIState.data.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    );
  } else if (APIState.data?.length === 0) content = <p>Aucun résultat</p>;

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Une erreur est survenue...");
        return response.json();
      })
      .then((data) => setAPIState({ data, loading: false }))
      .catch((error) => setAPIState({ error, loading: false }));
  }, []);

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
