import { createEvent } from './functions';

beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2021-12-07T10:20:30Z').getTime())
});

const data = {
    weekDay: 'mon',
    week: 1,
    openHour: 8,
    closeHour: 14
}

function addDays(days) {
    return new Date(new Date().setDate(new Date().getDate() + days));
}

function getDateCalendar(numDay, currentDay) {
    if (numDay >= currentDay && parseInt(data.closeHour) >= hour) {//posterior a dia de la semana
        return addDays((numDay - currentDay) + 7 * (data.week - 1));
    }
    return addDays((numDay - currentDay) + 7 * (data.week - 1));
}

const NUM_DAY = { 'mon': 1, 'tue': 2, 'wed': 3, 'thu': 4, 'fri': 5, 'sat': 6, 'sun': 7 };

const hour = new Date().getHours();

test('Validation a event title and content basic', () => {
    //At
    const result = createEvent(data.weekDay, data.week, data.openHour, data.closeHour);

    //Expected
    expect(result.title).toBe('[SOFKA U] Meeting Room');
    expect(result.description).toBe('Mentoring and Practice');
    expect(result.duration).toEqual([6, 'hour']);
});

test('Validation start date', () => {
    //Arrange
    const numDay = NUM_DAY[data.weekDay];
    const currentDay = new Date().getDay();
    const date = getDateCalendar(numDay, currentDay);

    //At
    const result = createEvent(data.weekDay, data.week, data.openHour, data.closeHour);

    //Expected
    expect(result.start.toUTCString).toEqual(date.toUTCString);
});

test('Validation date', () => {
    //Arrange
    const numDay = NUM_DAY[data.weekDay];
    const currentDay = new Date().getDay();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = getDateCalendar(numDay, currentDay);
    const dateResult = new Date(date).toLocaleDateString('es-ES', options);

    //At
    const result = createEvent(data.weekDay, data.week, data.openHour, data.closeHour);

    //Expected
    expect(result.date).toStrictEqual(dateResult);
});


describe('Validation illegal arguments', () => {
    test("Illegal check-in times", () => {
        //At
        const result = () => createEvent(weekday, week, 15, 14);

        //Expected
        expect(result).toThrow(Error);        
    });

    test("Illegal week with positive value", () => {
        //At
        const result = () => createEvent(weekday, -1, openHour, closeHour);

        //Expected
        expect(result).toThrow(Error);        
    });
    
    test("Illegal weekday", () => {
        //At
        const result = () => createEvent("mon", week, openHour, closeHour);

        //Expected
        expect(result).toThrow(Error);      
    });
});


test('create an event list of at least 10 events', () => {
    //Arrange

    //At

    //Expected
});