import { Lote } from './Lote';
import { Palestrante } from './Palestrante';
import { RedeSocial } from './RedeSocial';

export interface Evento {
    eventoId: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qntPessoas: number;
    imagemURL: string;
    telefone: string;
    email: string;
    lote: string;
    // lotes: Lote[];
    // redesSociais: RedeSocial[];
    // palestrantesEventos: Palestrante[];
}
