import { useSelector } from 'react-redux';

const UserName = () => {
  const username = useSelector((state) => state.user.userName);

  if (!username) return null;

  return (
    <div className="font-robotoMono text-sm font-semibold md:block ">
      {username}
    </div>
  );
};

export default UserName;
