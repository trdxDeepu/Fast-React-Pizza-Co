import { useState } from 'react';
import Button from '../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-robotoMono mb-4 text-sm font-semibold md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        className='w-72 input mb-8 '
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
