let lastId = 0;

export const newID = (prefix = 'id') => {
  lastId++;
  return `${prefix}-${lastId}`;
};
