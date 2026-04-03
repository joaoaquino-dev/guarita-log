import { useNavigate } from "react-router-dom";
import { getRecords } from "../utils/storage";

const Home = () => {
  const navigate = useNavigate();
  const records = getRecords();
  const lastRecord = records[0];

  return (
    <div>
      <div>
        <h1>Registros</h1>
      </div>
      <div>
        {lastRecord ? (
          <ul>
            <li>Vigilante: {lastRecord.guardName}</li>
            <li>Data: {lastRecord.date}</li>
          </ul>
        ) : (
          <p>Nenhum registro encontrado</p>
        )}
      </div>
      <div>
        <button
          className="bg-gray-700 text-white rounded-md cursor-pointer"
          onClick={() => navigate("/new-shift")}
        >
          Nova Ocorrência
        </button>
      </div>
      <div>
        <button
          className="bg-gray-700 text-white rounded-md cursor-pointer"
          onClick={() => navigate("/history")}
        >
          Histórico
        </button>
      </div>
    </div>
  );
};

export default Home;
