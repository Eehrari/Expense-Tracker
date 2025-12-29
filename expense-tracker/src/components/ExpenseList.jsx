import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
    return (
        <ul className="list">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
            ))}
        </ul>
    )
}

export default ExpenseList;