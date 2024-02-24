export const calculateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    let itemsPerPage = 5;
    if (screenWidth >= 1024) {
      itemsPerPage = 5;
    } else if (screenWidth >= 768) {
      itemsPerPage = 4;
    } else if (screenWidth >= 640) {
      itemsPerPage = 3;
    } else {
      itemsPerPage = 2;
    }
    return itemsPerPage;
  };