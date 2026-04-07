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
    <div
      className="bg-gray-900 flex flex-col
    items-center min-h-screen p-4"
    >
      <h1 className="font-bold text-4xl text-white">Nova Ocorrência</h1>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Seu nome"
          value={guardName}
          onChange={(e) => setGuardName(e.target.value)}
          className="bg-gray-700 placeholder:text-gray-400 text-center w-full rounded-lg p-3 text-white"
        />
      </div>
      <div>
        <ul className="bg-gray-800 p-4 rounded-lg w-full mt-4">
          {equipment.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 text-white py-2"
            >
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

      <div className="w-full mt-4">
        <textarea
          placeholder="Ocorrências/Observações"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="bg-gray-700 w-full p-3 rounded-lg text-white placeholder:text-gray-400 min-h-24"
        ></textarea>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md w-full mt-4"
          onClick={handleSubmit}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default NewShift;
