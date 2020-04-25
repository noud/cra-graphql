import { loader } from 'graphql.macro';
const query = loader('./foo.graphql');
// console.log('Foo query', query);
export default query;