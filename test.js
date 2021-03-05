let evenList = [];
const getEven = () => {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            evenList.push(i);
        }
    }
    return evenList;
};
