import { organizaAz, organizaZa } from '../src/data.js';
const DataDePrueba = [{"id": 23,"name": "Arcade Alien"},{"id": 369,"name": "Tusked Assassin",},
{"id": 169,"name": "Jacob"},{"id": 29,"name": "Baby Legs"}]
const DataOrdenada = [{"id": 23,"name": "Arcade Alien"},{"id": 29,"name": "Baby Legs"},{"id": 169,
"name": "Jacob"},{"id": 369,"name": "Tusked Assassin",}]


describe(' organizarlos de forma descendente', () => {
  it('is a function', () => {
    expect(typeof organizaAz).toBe('function');
  });


 
  it('returns `Data ordenada`', () => {
    expect( organizaAz (DataDePrueba)).toEqual(DataOrdenada);
  });

});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
// test('Should return sort Data (A-Z)', () => {
//     assertEqual(orderFilter(['z', 'a'], 'ascendente'), ['a', 'z']);
//     })
