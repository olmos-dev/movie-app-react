const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('movies.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(cors());
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});