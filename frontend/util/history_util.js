export const fetchHistories = user_id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}`
  })
);
