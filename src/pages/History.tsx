import { getRecords } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const records = getRecords();
  return (
    <div>
      <h1>Histórico</h1>

      <div>
        {records.length > 0 ? (
          records.map((record) => (
            <div key={record.id}>
              <p>{record.guardName}</p>
              <p>{record.date}</p>
              {record.notes && <p>{record.notes}</p>}
            </div>
          ))
        ) : (
          <p>Nenhum registro encontrado!</p>
        )}
      </div>

      <button onClick={() => navigate("/")}>Voltar ao início</button>
    </div>
  );
};

export default History;
