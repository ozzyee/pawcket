function parseMonth(month: string):string{

    let parsedMonth:string;
    switch (month) {
        case "01":
            parsedMonth = "January";
            break;
        case "02":
            parsedMonth = "February";
            break;
        case "03":
            parsedMonth = "March";
            break;
        case "04":
            parsedMonth = "April";
            break;
        case "05":
            parsedMonth = "May";
            break;
        case "06":
            parsedMonth = "June";
            break;
        case "07":
            parsedMonth = "July";
            break;
        case "08":
            parsedMonth = "August";
            break;
        case "09":
            parsedMonth = "September";
            break;
        case "10":
            parsedMonth = "October";
            break;
        case "11":
            parsedMonth = "November";
            break;
        case "12":
            parsedMonth = "December";
            break;
        
        default: parsedMonth = month
            break;
    }
    return parsedMonth
}


export function trimDate(date:string):string{
    const i = date.indexOf("T")
    const trimmed = date.substring(1, i).split("-").reverse();
    const parsedMonth = parseMonth(trimmed[1]);
    const finalDate = `${trimmed[0]} of ${parsedMonth} ${trimmed[2]}`
    return finalDate
}