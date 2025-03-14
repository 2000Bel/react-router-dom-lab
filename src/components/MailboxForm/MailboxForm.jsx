import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBox = {
      boxOwner,
      boxSize,
    };
    addBox(newBox);
    setBoxOwner('');
    setBoxSize('Small');
    navigate('/mailboxes'); // Redirigir a la lista de buzones
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Box Owner:</label>
      <input
        type="text"
        value={boxOwner}
        onChange={(e) => setBoxOwner(e.target.value)}
        placeholder="Enter owner name"
      />

      <label>Box Size:</label>
      <select
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;