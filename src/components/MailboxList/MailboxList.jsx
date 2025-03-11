import React from 'react';
import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      {mailboxes.length === 0 ? (
        <p>No mailboxes available.</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {mailboxes.map((mailbox) => (
            <Link 
              key={mailbox._id} 
              to={`/mailboxes/${mailbox._id}`} 
              style={{ padding: '20px', border: '1px solid black', textAlign: 'center' }}
            >
              Box Number: {mailbox._id}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MailboxList;
