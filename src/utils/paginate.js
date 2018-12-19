import _ from 'lodash'; 

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; 

    //convert the array into loadash wrapper
    // start at _ and take _ and then convert the lodash object into regular array  
    return _(items).slice(startIndex).take(pageSize).value();

    // _.slice(item, startIndex); //slice the array starting from the startIndex 
    // _.take();//give it an array and 
}

/*
    pageNumber      startIndex   
        1           0                   start slicing from 0 and take 4 items     
        2           (2-1)*4 = 4         start slicing from 4 and take 4 items 
        3           (3-1)*4 = 8         start slicing from 8 and take 4 items 
*/  