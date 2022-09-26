// ** get data from localStorage


const getDataFromLs = ()=>{
    const storedMeal = JSON.parse(localStorage.getItem('meals'));

    let favMeals = {};

    storedMeal && (favMeals = storedMeal);

    return favMeals;
};

const setDataToLs = (id)=>{
    // ** get data from ls
    const storedMeals = getDataFromLs();

    if (id in storedMeals) {
        storedMeals[id] = storedMeals[id] + 1;
        localStorage.setItem('meals', JSON.stringify(storedMeals))
    } else{
        storedMeals[id] = 1;

        localStorage.setItem('meals', JSON.stringify(storedMeals))
    }
};


export {
    getDataFromLs,
    setDataToLs
};
