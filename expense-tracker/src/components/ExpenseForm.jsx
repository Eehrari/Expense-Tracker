import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const CATEGORIES = ["Food", "Transport", "Bills", "Shopping", "Other"];

export default function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [error, setError] = useState("");

    function submit(){
        setError("");

        const cleanTitle = title.trim();
        const numerAmount = Number(amount);

        if(!cleanTitle){
            return setError("Title is required");
        }
        if(!Number.isFinite(numerAmount) || numerAmount<=0){
            return setError("Amount must be > 0");
        }

        onAddExpense({title: cleanTitle, amount: numerAmount, category})

        setTitle("");
        setAmount("");
        setCategory("Food");
    }
    return (
        <div>
            <div className="row">
                <TextInput
                    label={"Title"}
                    value={title}
                    onChange={setTitle}
                    placeholder={"e.g., Pizza"}
                ></TextInput>

                <TextInput
                    label={"Amount"}
                    value={amount}
                    onChange={setAmount}
                    placeholder={"e.g., 15"}
                ></TextInput>

                <SelectInput
                    label={"Category"}
                    value={category}
                    onChange={setCategory}
                    options={CATEGORIES}
                ></SelectInput>
            </div>
            {error ? <p className="error">{error}</p>: null}
            <button className="btn primary" onClick={submit}>Add</button>
        </div>
    )
}