let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let ques1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    ques2 = prompt('Во сколько обойдется?', '');
    ques3 = prompt('Введите обязательную статью расходов в этом месяце', '');
    ques4 = prompt('Во сколько обойдется?', '');

appData.expenses.ques1 = ques2;
appData.expenses.ques3 = ques4;

console.log( alert(appData.budget/30) );