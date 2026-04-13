import { useState } from "react";
import type { ShiftRecord } from "../types";
import { getRecords } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [records, _] = useState<ShiftRecord[]>(() => getRecords());
  return (
    <div
      className="bg-gray-900 flex flex-col
    items-center min-h-screen p-4"
    >
      <h1 className="font-bold text-4xl text-white mb-4">Histórico</h1>

      <div className="w-full mt-4">
        {records.length > 0 ? (
          records.map((record) => (
            <div
              key={record.id}
              className="bg-gray-800 p-4 rounded-lg w-full mb-3"
            >
              <p className="text-white font-bold">{record.guardName}</p>
              <p className="text-gray-400 text-sm">{record.date}</p>
              {record.notes && (
                <p className="text-gray-300 mt-2 text-sm">{record.notes}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-white">Nenhum registro encontrado!</p>
        )}
      </div>

      <button
        className="bg-gray-600 text-white px-4 py-3 rounded-md"
        onClick={() => navigate("/")}
      >
        Voltar ao início
      </button>
    </div>
  );
};

export default History;
