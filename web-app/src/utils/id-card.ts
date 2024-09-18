export const getBirthdayByIdCard = (idCard: string) => {
    if (idCard.length === 15) {
        return `19${idCard.substring(6, 8)}/${idCard.substring(8, 10)}/${idCard.substring(10, 12)}`;
    } else if (idCard.length === 18) {
        return `${idCard.substring(6, 10)}/${idCard.substring(10, 12)}/${idCard.substring(12, 14)}`;
    } else {
        return "";
    }
};

const genderArr = ["女", "男"];
export const getGenderByIdCard = (idCard: string) => {
    if (idCard.length === 15) {
        return genderArr[Number(idCard.substring(14, 15)) % 2];
    } else if (idCard.length === 18) {
        return genderArr[Number(idCard.substring(16, 17)) % 2];
    } else {
        return "未知";
    }
};
