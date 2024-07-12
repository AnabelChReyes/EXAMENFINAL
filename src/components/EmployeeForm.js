import React, { useState } from 'react';
import '../styles/styles.css'; // Asegúrate de que la ruta es correcta

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    hourlyWage: '',
    hoursWorked: '',
    overtimeHours: ''
  });
  
  const [isFormValid, setIsFormValid] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
    validateForm({
      ...employeeData,
      [name]: value
    });
  };
  
  const validateForm = (data) => {
    const { name, hourlyWage, hoursWorked, overtimeHours } = data;
    const isValid = name !== '' &&
      hourlyWage > 0 &&
      hoursWorked >= 0 &&
      overtimeHours >= 0;
    setIsFormValid(isValid);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica para el cálculo del salario final del empleado
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Empleado:</label>
        <input
          type="text"
          name="name"
          value={employeeData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Salario por Hora:</label>
        <input
          type="number"
          name="hourlyWage"
          value={employeeData.hourlyWage}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Horas Trabajadas:</label>
        <input
          type="number"
          name="hoursWorked"
          value={employeeData.hoursWorked}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Horas Extras Trabajadas:</label>
        <input
          type="number"
          name="overtimeHours"
          value={employeeData.overtimeHours}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" disabled={!isFormValid}>Calcular</button>
    </form>
  );
};

export default EmployeeForm;
