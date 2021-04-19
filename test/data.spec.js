import { organizaAz, organizaZa } from '../src/data.js';
const DataDePrueba = [{"id": 23,"name": "Arcade Alien"},{"id": 369,"name": "Tusked Assassin",},
{"id": 169,"name": "Jacob"},{"id": 29,"name": "Baby Legs"}]

const DataOrdenada = [{"id": 23,"name": "Arcade Alien"},{"id": 29,"name": "Baby Legs"},{"id": 169,
"name": "Jacob"},{"id": 369,"name": "Tusked Assassin",}]

const DataOrdenadaZa = [{"id": 369,"name": "Tusked Assassin",},{"id": 169,"name": "Jacob"},{"id": 29,"name": "Baby Legs"},
{"id": 23,"name": "Arcade Alien"}]




describe(' organizarlos de forma descendente', () => {
  it('is a function', () => {
    expect(typeof organizaAz).toBe('function');
  });


 
  it('returns `Data ordenada`', () => {
    expect( organizaAz (DataDePrueba)).toEqual(DataOrdenada);
  });

});


describe(' organizarlos de forma descendente', () => {
  it('is a function', () => {
    expect(typeof organizaZa).toBe('function');
  });


 
  it('returns `Data ordenada Za`', () => {
    expect( organizaZa (DataDePrueba)).toEqual(DataOrdenadaZa);
  });

});


