import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const readData = JSON.parse(data);
        readData.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(readData, null, 2), 'utf-8');
    } catch (error) {
        console.error('incorrect request', error);
    }
};

addOneContact();
