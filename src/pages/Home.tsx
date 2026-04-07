import { useNavigate } from "react-router-dom";
import { getRecords } from "../utils/storage";

const Home = () => {
  const navigate = useNavigate();
  const records = getRecords();
  const lastRecord = records[0];

  return (
    <div
      className="bg-gray-900 flex flex-col
    items-center min-h-screen p-4"
    >
      <header className="text-center mb-8">
        <h1 className="text-white text-4xl font-extrabold tracking-tight">
          GuaritaLog
        </h1>
        <p className="text-blue-500 font-semibold tracking-widest uppercase text-xs mt-4">
          Passagem de Plantão
        </p>
      </header>
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-white font-bold text-2xl">
          Último vigilante registrado:
        </h2>
        {lastRecord ? (
          <ul className="bg-gray-800 text-white mt-2">
            <li>Vigilante: {lastRecord.guardName}</li>
            <li>Data: {lastRecord.date}</li>
          </ul>
        ) : (
          <p className="text-white">Nenhum registro encontrado</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md w-full mt-4"
          onClick={() => navigate("/new-shift")}
        >
          Nova Ocorrência
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md w-full mt-4"
          onClick={() => navigate("/history")}
        >
          Histórico
        </button>
      </div>
    </div>
  );
};

export default Home;
