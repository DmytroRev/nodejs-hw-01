import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const readData = JSON.parse(data);
        if (readData.length > 0) {
            readData.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(readData, null, 2), 'utf-8');
        } else {
            console.log('No contacts to delete');
        }
    } catch (error) {
        console.error('Error deleting the last contacts', error);
    }
};

removeLastContact();
