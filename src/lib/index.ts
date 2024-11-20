export const applyOxfordComma = (arr: string[]) => {
    switch (arr.length) {
        case 0:
            return "";
        case 1:
            return arr[0];
        case 2:
            return arr[0] + " and " + arr[1];
        default:
            const join = arr.slice(0, -1).join(", ");
            return join + ", and " + arr[arr.length - 1];
    }
};
