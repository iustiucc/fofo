import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase(
  {
    name: 'database.db',
    location: '../Data',
    createFromLocation: 1,
  },
  () => {
    console.log('Database opened successfully');
  },
  (error) => {
    console.error('Error opening database:', error);
  }
);

export default database;