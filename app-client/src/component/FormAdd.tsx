import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'


interface Task {
  content: string;
  done: boolean;
}
interface Props {
  getTasks: () => void;
}
const FormAdd: React.FC<Props> = ({getTasks}) =>  {

  const [formData, setFormData] = useState<Task>({
    content: '',
    done: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleAddClick = async () => {
    try {
      // Wysłanie danych na serwer za pomocą Axios
      await axios.post(`http://localhost:7002/tasks/`,formData);
      setFormData({
        content: '',
        done: false, 
      });
      getTasks();
    } catch (error) {
      console.error('Wystąpił błąd podczas dodawania zadania:', error);
      alert('Wystąpił błąd podczas dodawania zadania.');
    }
  };

  return (
    <div>
                  <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
            placeholder='Wpisz treść zadania'
            />
        <button type="button" className="btn" onClick={handleAddClick}>
        Dodaj zadanie
        </button>
    </div>
  );
};

export default FormAdd;