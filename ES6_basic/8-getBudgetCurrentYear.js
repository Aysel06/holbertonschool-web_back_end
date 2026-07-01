function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const key = getCurrentYear();
    const budget = {
  
    [`income-${key}`]: income,
    [`gdp-${key}`]: gdp,
    [`capita-${key}`]: capita,
    };
  
    return budget;
  }