// Bolivia TV: lista fija de canales de Bolivia (no depende de ningún repo externo).
// Datos tomados el 2026-10-03 de la base comunitaria iptv-org/iptv (vía la copia diaria
// de ice-dev-x), pero guardados aquí mismo: si esa fuente cambia o desaparece, este
// plugin sigue funcionando igual. Para actualizar la lista en el futuro, solo hay que
// reemplazar el array CANALES por una lista nueva.

const CANALES = [
  { id: "amitel-tv-720p", title: "Amitel TV (720p)", url: "https://stv2.boliviaplay.com.bo/hls/stream.m3u8" },
  { id: "atb-la-paz", title: "ATB La Paz", url: "https://stream.atb.com.bo/live/daniel/index.m3u8" },
  { id: "audiokiss-1080p", title: "Audiokiss (1080p)", url: "https://master.tucableip.com/audiokisstv/index.m3u8" },
  { id: "ayni-tv", title: "AYNI TV", url: "https://59d39900ebfb8.streamlock.net/Aynitv/Aynitv/playlist.m3u8" },
  { id: "cadena-a-720p-not-24-7", title: "Cadena A (720p) [Not 24/7]", url: "https://5fe2654d6127d.streamlock.net/cadenaa/videocadenaa/playlist.m3u8" },
  { id: "canal-56-quiero-tv-720p", title: "Canal 56 Quiero TV (720p)", url: "http://45.5.118.152:8000/play/a08z/index.m3u8" },
  { id: "ceacom-tv-1080p-not-24-7", title: "CEACOM TV (1080p) [Not 24/7]", url: "https://eu1.servers10.com:8081/ceacom/index.m3u8" },
  { id: "coral-tv-720p", title: "Coral TV (720p)", url: "https://tv.mediacp.eu:8081/coraltv/index.m3u8" },
  { id: "delta-tv", title: "Delta TV", url: "https://st.deltaboliviainstitucion.org:3778/hybrid/play.m3u8" },
  { id: "el-deber-1080p", title: "EL DEBER (1080p)", url: "https://master.tucableip.com/eldebertv/index.m3u8" },
  { id: "f10-hd-geo-blocked", title: "F10 HD [Geo-blocked]", url: "https://tv2.bitstreaming.net:3235/multi_live/play.m3u8" },
  { id: "fap-tv-720p", title: "FAP TV (720p)", url: "https://edge.enhdtv.com/faptv/index.m3u8" },
  { id: "ftv-720p", title: "FTV (720p)", url: "https://master.tucableip.com/ftvhd/index.m3u8" },
  { id: "gigavision-720p", title: "Gigavision (720p)", url: "https://tv2.bitstreaming.net:3576/multi_live/play.m3u8" },
  { id: "poder-de-dios-tv-720p", title: "Poder de Dios TV (720p)", url: "https://s3.tvdatta.com:3846/live/poderdedioslive.m3u8" },
  { id: "ptv-720p", title: "PTV (720p)", url: "https://giatv.bozztv.com/giatv/giatv-PTVonLINE/PTVonLINE/playlist.m3u8" },
  { id: "radio-centro-720p", title: "Radio Centro (720p)", url: "https://streamlov.alsolnet.com/grupocentrobo/live/playlist.m3u8" },
  { id: "radio-clasica-tv-720p", title: "Radio Clasica TV (720p)", url: "https://ares.disfrutaenlared.com:1936/clasica/clasica/playlist.m3u8" },
  { id: "radio-mega-tv-amazonia-720p", title: "Radio Mega TV Amazonia (720p)", url: "https://ares.disfrutaenlared.com:1936/megatv/megatv/playlist.m3u8" },
  { id: "radio-universitaria-san-andres-720p", title: "Radio Universitaria San Andres (720p)", url: "https://edge.enhdtv.com/8054/index.m3u8" },
  { id: "red-advenir-tv-360p-not-24-7", title: "Red ADvenir TV (360p) [Not 24/7]", url: "http://streamer1.streamhost.org:1935/salive/GMIredadvenirm/playlist.m3u8" },
  { id: "red-america-tv-1080p", title: "Red America TV (1080p)", url: "https://edge.enhdtv.com/redamerica/index.m3u8" },
  { id: "red-cctv", title: "Red CCTV", url: "https://ares.disfrutaenlared.com:1936/redcctv/redcctv/playlist.m3u8" },
  { id: "red-tv-shop-720p", title: "Red TV Shop (720p)", url: "https://master.tucableip.com/redtvshop/index.m3u8" },
  { id: "red-uno-720p-opcion-2", title: "Red Uno (720p) (Opcion 2)", url: "https://tv.centaurychile.com/interactiva/streams/KIgB6QvZ0L8XaSLd3211668845221245.m3u8" },
  { id: "red-uno-santa-cruz-1080p", title: "Red Uno Santa Cruz (1080p)", url: "http://190.181.18.82:4111/play/a006/index.m3u8" },
  { id: "rtp", title: "RTP", url: "https://rtp.noxun.net/hls/stream.m3u8" },
  { id: "sucremanta-tv-720p", title: "Sucremanta TV (720p)", url: "https://lbgo.bozztv.com/ssh101/ssh101/ok2026/playlist.m3u8" },
  { id: "tdt-multimedia-720p", title: "TDT Multimedia (720p)", url: "https://video01.brascast.com/juan6318/juan6318/playlist.m3u8" },
  { id: "tele-6-720p", title: "TELE 6 (720p)", url: "https://lbgo.bozztv.com/ssh101/ssh101/tele6/playlist.m3u8" },
  { id: "tele-fe-bolivia-720p", title: "Tele Fe Bolivia (720p)", url: "https://59d39900ebfb8.streamlock.net/telefehd/telefehd/playlist.m3u8" },
  { id: "tigo-sports-720p-geo-blocked", title: "Tigo Sports (720p) [Geo-blocked]", url: "https://dipdxjic51jcl.cloudfront.net/out/v1/81f769d780694be488d85811331c8a4f/index.m3u8" },
  { id: "tl-estrella-720p", title: "TL Estrella (720p)", url: "https://59d39900ebfb8.streamlock.net/teleestrella/teleestrella/playlist.m3u8" },
  { id: "transmedia-720p", title: "TransMedia (720p)", url: "https://edge.enhdtv.com/8064/index.m3u8" },
  { id: "tv-latina-1080p", title: "TV Latina (1080p)", url: "https://castv10.plugstreaming.com:19360/redtv/redtv.m3u8" },
  { id: "tv-latina-1080p-opcion-2", title: "TV Latina (1080p) (Opcion 2)", url: "https://master.tucableip.com/tvlatina/index.m3u8" },
  { id: "tv-off-1080p", title: "TV OFF (1080p)", url: "https://edge.enhdtv.com/tvoff/index.m3u8" },
  { id: "tvu-sucre-720p", title: "TVU Sucre (720p)", url: "https://edge.enhdtv.com/8214/index.m3u8" },
  { id: "umsa-tvu-internacional-720p", title: "UMSA TVU Internacional (720p)", url: "https://edge.enhdtv.com/8026/index.m3u8" },
  { id: "umsa-tvu-internacional-720p-opcion-2", title: "UMSA TVU Internacional (720p) (Opcion 2)", url: "https://live.enhdtv.com:8081/8026/tracks-v1a1/mono.m3u8", referer: "https://tvu.umsa.bo/tvu-internacional" },
  { id: "umsa-tvu-lp-720p", title: "UMSA TVU LP (720p)", url: "https://edge.enhdtv.com/8190/index.m3u8" },
  { id: "umsa-tvu-lp-720p-opcion-2", title: "UMSA TVU LP (720p) (Opcion 2)", url: "https://live.enhdtv.com:8081/8190/tracks-v1a1/mono.m3u8", referer: "https://tvu.umsa.bo/en-vivo" },
  { id: "unifranz-720p", title: "Unifranz (720p)", url: "https://edge.enhdtv.com/8192/index.m3u8" },
  { id: "unifranz-720p-opcion-2", title: "Unifranz (720p) (Opcion 2)", url: "https://live.enhdtv.com:8081/8192/index.m3u8" },
  { id: "unitel-cochabamba-720p", title: "Unitel Cochabamba (720p)", url: "https://lbgo.bozztv.com/ssh101/ssh101/tvjoaquiniana26/playlist.m3u8" },
  { id: "unitel-cochabamba-720p-opcion-2", title: "Unitel Cochabamba (720p) (Opcion 2)", url: "https://mdstrm.com/live-stream-playlist/691f2aeb5ac95d286c49af8d.m3u8" },
  { id: "unitel-la-paz-720p", title: "Unitel La Paz (720p)", url: "https://mdstrm.com/live-stream-playlist/6928b14aaa768aad947bf65d.m3u8" },
  { id: "unitel-santa-cruz-720p", title: "Unitel Santa Cruz (720p)", url: "https://mdstrm.com/live-stream-playlist/692b7e7ac84183fcf9e3462d.m3u8" },
  { id: "universidadmayordesanandres-1080p-not-24-7", title: "UniversidadMayordeSanAndres (1080p) [Not 24/7]", url: "https://live.enhdtv.com:8081/8190/index.m3u8", referer: "https://tvu.umsa.bo/en-vivo" },
  { id: "upea-tv-720p", title: "UPEA TV (720p)", url: "https://tvstream.upea.bo/hls/oSs0jSWumTFIIVY97559.m3u8", referer: "https://tv.upea.bo/live" },
  { id: "vos-tv", title: "Vos TV", url: "https://59d39900ebfb8.streamlock.net/vostv/vostv/playlist.m3u8" },
  { id: "xtotv-1280p-not-24-7", title: "XTOTV (1280p) [Not 24/7]", url: "http://190.104.15.135/0.ts", referer: "https://www.sccbolivia.com/" },
  { id: "zuraca-tv-720p", title: "Zuraca TV (720p)", url: "https://tv3.bitstreaming.net:3680/live/zuracatvlive.m3u8" },
  { id: "bolivia-tv-720p-not-24-7", title: "Bolivia TV (720p) [Not 24/7]", url: "https://hls.tvabierta.net/hls/boliviatv.m3u8" },
  { id: "bolivia-tv-1080p", title: "Bolivia TV (1080p)", url: "http://190.181.61.93:8000/play/a001/index.m3u8" },
];

export async function home() {
  await null;
  const items = CANALES.map(toItem);
  return [{ id: "row-bolivia", title: "Bolivia", items }];
}

// Categorías (máximo 3). Deportes siempre primero.
const CATEGORIAS = [
  { id: "deportes", title: "Deportes", genre: "deportes" },
  { id: "universitarios", title: "Universitarios y educativos", genre: "otros" },
  { id: "tv", title: "Televisión", genre: "entretenimiento" },
];

// Se compara contra el nombre del canal en minúsculas y sin tildes.
function categoriaDe(c) {
  const k = String(c.title).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (/(^| )f10( |$)|tigo sports/.test(k)) return "deportes";
  if (/umsa|(^| )tvu( |$)|upea|unifranz|universidad|universitaria/.test(k)) return "universitarios";
  return "tv";
}

export async function liveCategories() {
  await null;
  const presentes = new Set(CANALES.map(categoriaDe));
  return CATEGORIAS.filter((c) => presentes.has(c.id));
}

export async function liveChannels(args) {
  await null;
  const { categoryId } = args || {};
  const lista = categoryId ? CANALES.filter((c) => categoriaDe(c) === categoryId) : CANALES;
  return { items: lista.map(toItem) };
}

function toItem(c) {
  const item = { id: c.id, title: c.title, kind: "live", categoryId: categoriaDe(c), stream: { url: c.url } };
  if (c.logo) item.poster = c.logo;
  if (c.referer) item.stream.headers = { Referer: c.referer };
  return item;
}

// Los canales ya traen su URL directa (stream.url), así que resolve no se usa.
export async function resolve() {
  await null;
  throw kino.error("not_found");
}
