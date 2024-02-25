

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