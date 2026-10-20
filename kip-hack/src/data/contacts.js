const phone = '77784338839';
const coords = { lat: 43.252213, lon: 76.891215 };
const firmId = '70000001030536155';

export const contacts = {
  phone: '+7 (778) 433-88-39',
  phoneHref: `tel:+${phone}`,
  whatsappHref: `https://wa.me/${phone}?text=${encodeURIComponent('Здравствуйте, пишу с сайта!')}`,
  address: 'ул. Толе би, 189д, 3-й этаж, офис 312',
  district: 'Алмалинский район',
  hours: '12:00–21:00 (по записи)',
  mapHref: `https://2gis.kz/almaty/firm/${firmId}`,
  mapEmbed: `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(JSON.stringify({
    pos: { ...coords, zoom: 16 },
    opt: { city: 'almaty' },
    org: firmId,
  }))}`,
};
