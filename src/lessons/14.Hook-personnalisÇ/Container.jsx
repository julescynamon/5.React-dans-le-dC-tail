import useAPICall from "./Hook/useAPICall";
import spinner from "./spinner.svg";

export default function Container() {
  const { catData, error, loading } = useAPICall();
  let content;
  if (loading && !error) {
    content = <img src={spinner} alt="icone de chargement" />;
  } else if (error) {
    <p>Une erreur est survenue</p>;
  } else if (catData) {
    <img src={catData[0].url} alt="image de chat" />;
  }
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {content}
    </div>
  );
}
