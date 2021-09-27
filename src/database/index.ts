import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
<<<<<<< HEAD
  newOptions.host = 'database';
=======
  newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
>>>>>>> old-state
  createConnection({
    ...options,
  });
});