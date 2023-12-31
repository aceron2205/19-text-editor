import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const contentDb = await openDB('content', 1);

  const tx = contentDb.transaction('content', 'readwrite');

  const store = tx.objectStore('content');

  const request = store.add({ content:content });

  const result = await request;

  console.log('data saved to the database', result)

 };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const contentDb = await openDB('content', 1);

  const tx = contentDb.transaction('content', 'readonly');

  const store = tx.objectStore('content');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result
}


initdb();
