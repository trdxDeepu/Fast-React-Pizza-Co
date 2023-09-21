import { useState } from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from '../features/users/userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername('')
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 font-robotoMono text-sm font-semibold md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        className="input mb-8 w-72 "
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
