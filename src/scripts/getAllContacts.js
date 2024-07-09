import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const readData = JSON.parse(data);
        return readData;
    } catch (error) {
        console.error('incorract request', error);
    }
};

console.log(await getAllContacts());
