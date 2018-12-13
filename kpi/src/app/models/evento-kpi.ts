import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Filiale } from './filiale';
import { Processo } from './processo';

export class EventoKPI {
    data: Date;
    filiale: Filiale;
    processo: Processo;
    esito: boolean;
    note: string;
}
