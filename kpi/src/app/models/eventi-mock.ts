import { EventoKPI } from './evento-kpi';

export const EVENTI: EventoKPI[] = [
    {
        data: new Date('2018-12-12'),
        esito: true,
        filiale: {
            id: '1',
            nome: 'Milano'
        },
        note: 'Tutto ok',
        processo: {
            nome: 'Importazione DB 1'
        }
    },
    {
        data: new Date('2018-12-11'),
        esito: false,
        filiale: {
            id: '2',
            nome: 'Bergamo'
        },
        note: 'Tutto ok',
        processo: {
            nome: 'Importazione DB 2'
        }
    },
    {
        data: new Date('2018-12-11'),
        esito: false,
        filiale: {
            id: '2',
            nome: 'Bergamo'
        },
        note: 'Tutto ok',
        processo: {
            nome: 'Importazione DB 1'
        }
    },
];
