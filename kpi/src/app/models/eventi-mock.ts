import { EventoKPI } from './evento-kpi';

export const EVENTI: EventoKPI[] = [
    {
        data: new Date('2018-12-12'),
        esito: true,
        filiale: 'Milano',
        note: 'Tutto ok',
        processo: 'Importazione DB 1'
    },
    {
        data: new Date('2018-12-11'),
        esito: false,
        filiale:  'Bergamo',
        note: 'Tutto ok',
        processo: 'Importazione DB 2'
    },
    {
        data: new Date('2018-12-11'),
        esito: false,
        filiale: 'Bergamo',
        note: 'Tutto ok',
        processo: 'Importazione DB 1'
    },
];
