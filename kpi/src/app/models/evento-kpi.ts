import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Filiale } from './filiale';
import { Processo } from './processo';

export class EventoKPI {
    data?: Date;
    filiale: string;
    processo: string;
    esito: boolean;
    note: string;
}
