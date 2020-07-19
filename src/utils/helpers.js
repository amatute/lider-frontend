export const axiosParams = (searchTerm, page, limit) => {
  const params = new URLSearchParams();
  params.append('searchTerm', searchTerm);
  params.append('page', page);
  params.append('limit', limit);
  return params
}
