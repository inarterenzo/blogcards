import Container from './components/Container';
import CardList from './components/CardList';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ErrorMessage from './components/ErrorMessage';

function App() {

  const { isPending, error, data: postList , isFetching } = useQuery({
    queryKey: ['postData'],
    queryFn: () =>
      axios
        .get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
        .then((res) => res.data),
  })

  if (isPending) return <ErrorMessage message="Loading ..." />

  if (error)  return <ErrorMessage message={'An error has occurred: ' + error.message} />
  
  return (
    <Container>
      <CardList data={postList} />
    </Container>
  );
}

export default App;




