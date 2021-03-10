export const getInitails = (name: string) => {
  if (name.length >= 2) {
    return (name[0] + name[1]).trim();
  }

  return '';
};
