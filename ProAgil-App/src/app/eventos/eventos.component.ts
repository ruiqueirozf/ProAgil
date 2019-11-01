import { Component, OnInit, TemplateRef } from '@angular/core';
import { Response } from 'selenium-webdriver/http';
import { EventoService } from '../_services/evento.service';
import { Evento } from '../_models/Evento';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventosFiltrados: Evento[];
  eventos: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = true;
  aFiltroLista: string;
  modalRef: BsModalRef;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService
    ) { }


  ngOnInit() {
    this.getEventos();
  }

 openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }

  get filtroLista(): string {
    return this.aFiltroLista;
  }

  set filtroLista(value: string) {
    this.aFiltroLista = value;

    if (this.filtroLista) {
      this.eventosFiltrados = this.filtrarEventos(this.filtroLista);
    } else {
      this.eventosFiltrados = this.eventos;
    }
    // if ternário
    // this.eventosFiltrados = this.filtroLista
    //   ? this.filtrarEventos(this.filtroLista)
    //   : this.eventos;
  }


  getEventos() {
    this.eventoService.getAllEvento().subscribe(
      (_eventos: Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
      console.log(_eventos);
    },
    error => { console.log(error);
    }
    );
  }

  mostrarImagens() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

}
