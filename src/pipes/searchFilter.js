export const searchFilter = (arr, searchTerm) => {
    console.log("Search Term", searchTerm)
    if(searchTerm.trim() == '') {
        return arr;
    } else{
        return arr.filter(product => product.title.toLowerCase().startsWith(searchTerm.toLowerCase()));
    }
};