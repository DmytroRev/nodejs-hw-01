import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    } catch (error) {
        console.error('Error deleting all contacts', error);
    }
};

removeAllContacts();
