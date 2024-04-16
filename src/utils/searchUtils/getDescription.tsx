const getDescription = (article: any, key: any) => {
  if (article?.highlight?.[key] && (article.highlight[key] || []).length > 0) {
    return (article.highlight[key] || []).join(' ');
  }
  return article[key] || '';
};
export default getDescription;
