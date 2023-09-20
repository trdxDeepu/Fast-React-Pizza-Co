import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  const className =
    ' text-sm text-blue-500 hover:text-blue-600 hover:underline';

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1" className={className}>
        {' '}
        &larr; Go back{' '}
      </LinkButton>
    </div>
  );
}

export default Error;
