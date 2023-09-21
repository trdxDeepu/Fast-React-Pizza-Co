import { useSelector } from 'react-redux';
import CreateUser from '../users/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className=" my-10 text-center sm:my-16">
      <h1 className="mb-4 text-center text-4xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">Continue Ordering,{usernamec}</Button>
      )}
    </div>
  );
}
export default Home;
