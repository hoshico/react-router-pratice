import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>urlParameterページです</h1>
      <p>パラメーターは{id}</p>
    </div>
  );
};
