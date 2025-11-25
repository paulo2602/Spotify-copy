/**
 * @typedef {Object} Track
 * @property {string} id
 * @property {string} title
 * @property {string} artist
 * @property {string} album
 * @property {number} duration
 * @property {number} plays
 * @property {string} image
 */

/**
 * @typedef {Object} Playlist
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {Track[]} tracks
 */

/** @type {Track[]} */
export const mockTracks = [
  {
    id: '1',
    title: 'Graça e Misericórdia',
    artist: 'Damares',
    album: 'Tudo Novo',
    duration: 240,
    plays: 2500000,
    image: '/images/damares.svg',
  },
  {
    id: '2',
    title: 'Levanta e Anda',
    artist: 'Fernandinho',
    album: 'Histórias de Fé',
    duration: 210,
    plays: 3200000,
    image: '/images/fernandinho.svg',
  },
  {
    id: '3',
    title: 'Deus Nunca Falha',
    artist: 'Eyshila',
    album: 'Fé',
    duration: 265,
    plays: 2800000,
    image: '/images/eyshila.svg',
  },
  {
    id: '4',
    title: 'Aleluia Senhor',
    artist: 'Anderson Freire',
    album: 'Libertação',
    duration: 195,
    plays: 3100000,
    image: '/images/anderson-freire.svg',
  },
  {
    id: '5',
    title: 'Abençoado Dia',
    artist: 'Priscilla Alcântara',
    album: 'Simplesmente',
    duration: 225,
    plays: 2900000,
    image: '/images/priscilla.svg',
  },
];

/** @type {Playlist[]} */
export const mockPlaylists = [
  {
    id: 'p1',
    name: 'Gospel Hits',
    description: 'As melhores músicas gospel do momento',
    image: '/images/gospel-hits.svg',
    tracks: mockTracks.slice(0, 3),
  },
  {
    id: 'p2',
    name: 'Adoração',
    description: 'Músicas de adoração e louvor',
    image: '/images/adoracao.svg',
    tracks: mockTracks.slice(1, 4),
  },
  {
    id: 'p3',
    name: 'Inspiração',
    description: 'Mensagens que tocam o coração',
    image: '/images/inspiracao.svg',
    tracks: mockTracks,
  },
  {
    id: 'p4',
    name: 'Cantores Consagrados',
    description: 'Os grandes nomes da música gospel',
    image: '/images/consagrados.svg',
    tracks: mockTracks.slice(2, 5),
  },
];
