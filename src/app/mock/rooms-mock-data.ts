// src/app/mocks/rooms-mock-data.ts

import { Room } from "../models/room";


export const ROOMS_MOCK_DATA: Room[] = [
  {
    id_room: 101,
    nm_room: 'Sala Principal',
    ds_room: 'Sala ampla com projetor e quadro branco.',
    nu_capacidade: 10,
    tp_status: 'disponivel',
    nu_ocupante: 0,
    imageUrl: 'https://via.placeholder.com/300x200?text=Sala+101'
  },
  {
    id_room: 102,
    nm_room: 'Sala de Reuniões Pequena',
    ds_room: 'Ideal para reuniões rápidas ou em grupo de 2-3 pessoas.',
    nu_capacidade: 4,
    tp_status: 'ocupada',
    nu_ocupante: 3,
    imageUrl: 'https://via.placeholder.com/300x200?text=Sala+102'
  },
  {
    id_room: 103,
    nm_room: 'Laboratório de Desenvolvimento',
    ds_room: 'Equipada com computadores de alta performance para codificação.',
    nu_capacidade: 8,
    tp_status: 'limpeza',
    nu_ocupante: 0,
    imageUrl: 'https://via.placeholder.com/300x200?text=Lab+Dev'
  },
  {
    id_room: 104,
    nm_room: 'Sala de Treinamento',
    ds_room: 'Espaço versátil para workshops e palestras.',
    nu_capacidade: 20,
    tp_status: 'manutencao',
    nu_ocupante: 0,
    imageUrl: 'https://via.placeholder.com/300x200?text=Treinamento'
  },
  {
    id_room: 105,
    nm_room: 'Estúdio de Gravação',
    ds_room: 'Ambiente acústico para gravação de áudios e vídeos.',
    nu_capacidade: 2,
    tp_status: 'disponivel',
    nu_ocupante: 0,
    imageUrl: 'https://via.placeholder.com/300x200?text=Estudio'
  }
];