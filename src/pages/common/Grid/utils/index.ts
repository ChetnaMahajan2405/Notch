export const getOrderStatusClassName = (status: string) => {
    switch (status.toLowerCase()) {
        case "paid":
            return "oval-tag-paid";
        case "delivered":
            return "oval-tag-delivered";
        default:
            return "oval-tag-other";
    }
};

export const getFormattedDate = (date: string) => {
    if (!date) {
        return "";
    }
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo}, ${da}, ${ye}`;
};

export const sortByData = (data: any[], prop: string, isAsc: boolean) => {
    if (data.length <= 1) {
        return data
    }
    return data.sort((a, b) => {
        if (a[prop] < b[prop])
            return isAsc ? -1 : 1;
        if (a[prop] > b[prop])
            return isAsc ? 1 : -1;
        return 0;
    });
}