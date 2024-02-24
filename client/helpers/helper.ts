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

  type FormatDateFunction = (dateString: string) => string;

  
  export const formatDateFunction: FormatDateFunction = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };