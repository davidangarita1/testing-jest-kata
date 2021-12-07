import { createEvent } from './functions'

beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2020-04-07T10:20:30Z').getTime())
});

const data = {
    weekDay: 'mon',
    week: 1,
    openHour: 8,
    closeHour: 14
}

test('Validation a event title and content basic', () => {
    //At
    const result = createEvent(data.weekDay, data.week, data.openHour, data.closeHour);

    //Expected
    expect(result.title).toBe('[SOFKA U] Meeting Room');
    expect(result.description).toBe('Mentoring and Practice');
    expect(result.duration).toEqual([6, 'hour']);
});

test('Validation start date', () => {
    //Arrage

    //At
    

    //Expected
});

test('Validation date', () => {
   //TODO: hacer las verificaciones
});


test('Validation illegal arguments', () => {
    //TODO: hacer las verificaciones
});


test('create an event list of at least 10 events', () => {
    //TODO: hacer las verificaciones
});