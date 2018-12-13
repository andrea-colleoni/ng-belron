import { Filiale } from './filiale';
import { Processo } from './processo';

export class Filtro {
    filiale?: Filiale;
    processo?: Processo;
    esito?: boolean;
}
