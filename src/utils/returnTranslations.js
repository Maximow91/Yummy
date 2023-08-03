//BEFORE RUN SCRIPT ADD TYPE:MODULE IN PACKAGE.JSON

import {GoogleSpreadsheet} from 'google-spreadsheet';
import secret from '../../google/secret.json' assert {type: 'json'};
import {JWT} from 'google-auth-library';
import fs from 'fs';

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: secret.client_email,
  key: secret.private_key,
  scopes: SCOPES,
});

const doc = new GoogleSpreadsheet(
  '1Nlax6MKPccj3z-BwAU1yGgnts1pI-NwRAmiDPx8lcZ8',
  jwt,
);

const read = async () => {
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle.List_1;
  await sheet.loadHeaderRow();
  const colTitles = sheet.headerValues;
  const rows = await sheet.getRows({limit: sheet.rowCount});
  let result = {};

  rows.map(row => {
    const key = row.get('key');
    colTitles.slice(1).forEach(title => {
      result[title] = result[title] || [];
      result = {
        ...result,
        [title]: {
          ...result[title],
          [key]: row.get(title),
        },
      };
    });
  });
  console.log(result);
  return result;
};

const write = data => {
  Object.keys(data).forEach(key => {
    fs.writeFile(
      `./translations/${key}.json`,
      JSON.stringify(data[key], null, 2),
      err => {
        if (err) {
          console.error(err);
        }
      },
    );
  });
};

read()
  .then(data => write(data))
  .catch(err => console.log('ERROR!!!!', err));
