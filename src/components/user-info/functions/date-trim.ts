function parseMonth(month: string) {
   let parsedMonth: string;
   switch (month) {
      case "Jan":
         parsedMonth = "January";
         break;
      case "Feb":
         parsedMonth = "February";
         break;
      case "Mar":
         parsedMonth = "March";
         break;
      case "Apr":
         parsedMonth = "April";
         break;
      case "May":
         parsedMonth = "May";
         break;
      case "Jun":
         parsedMonth = "June";
         break;
      case "Jul":
         parsedMonth = "July";
         break;
      case "Aug":
         parsedMonth = "August";
         break;
      case "Sep":
         parsedMonth = "September";
         break;
      case "Oct":
         parsedMonth = "October";
         break;
      case "Nov":
         parsedMonth = "November";
         break;
      case "Dec":
         parsedMonth = "December";
         break;

      default:
         parsedMonth = month;
         break;
   }
   return parsedMonth;
}

export function trimDate(date: string | Date | undefined): string | null {
   if (date === undefined || typeof date === "object") {
      return null;
   }
   const trimmed = date.split(" ").slice(1, 4);
   const parsedMonth = parseMonth(trimmed[0]);
   const finalDate = `${trimmed[1]} of ${parsedMonth} ${trimmed[2]}`;
   return finalDate;
}
