import { strictEqual } from 'assert';
import sizeup from '../lib';

describe('Sizing up!', () => {
  it('http://motherfuckingwebsite.com/', () =>
    sizeup('http://motherfuckingwebsite.com/')
    .then(result => strictEqual(result.length, 3))
  );

  it('http://bettermotherfuckingwebsite.com/', () =>
    sizeup('http://bettermotherfuckingwebsite.com/')
    .then(result => strictEqual(result.length, 3))
  );
}).timeout(10000);
