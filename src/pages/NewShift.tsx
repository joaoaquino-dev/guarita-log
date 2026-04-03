import { useState } from "react";
import { type Equipment } from "../types";
import { DEFAULT_EQUIPMENT } from "../data/equipment";
import { saveRecord } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { type ShiftRecord } from "../types";

const NewShift = () => {
  const [guardName, setGuardName] = useState("");
  const [equipment, setEquipment] = useState<Equipment[]>(DEFAULT_EQUIPMENT);
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const handleEquipmentToggle = (id: string) => {
    setEquipment(
      equipment.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleSubmit = () => {
    if (!guardName) {
      alert("Digite seu nome");
      return;
    }

    if (equipment.some((item) => !item.checked) && notes.trim() === "") {
      alert(
        "Algum item não foi conferido. Descreva a ocorrência no campo de observações.",
      );
      return;
    }

    const newRecord: ShiftRecord = {
      id: crypto.randomUUID(),
      guardName,
      date: new Date().toLocaleDateString("pt-BR"),
      equipment,
      notes,
      createdAt: new Date().toISOString(),
    };

    saveRecord(newRecord);

    navigate("/");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          value={guardName}
          onChange={(e) => setGuardName(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {equipment.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleEquipmentToggle(item.id);
                }}
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <textarea
          placeholder="Ocorrências/Observações"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit}>Confirmar</button>
      </div>
    </div>
  );
};

export default NewShift;
