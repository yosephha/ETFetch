export const fetchEtfs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/etfs'
  })
);

export const fetchEtf = symbol => (
  $.ajax({
    method: 'GET',
    url: `/api/etfs/${symbol}`
  })
);
