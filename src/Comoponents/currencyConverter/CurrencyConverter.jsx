

import React, { useEffect, useState } from 'react'
import InputBox from '../inputbox/InputBox';
import useCurrencyInfo from '../../Hooks/currencyInfo';

const CurrencyConverter = () => {
    const currencys  = useCurrencyInfo(
			"https://api.frankfurter.app/currencies"
	);
	console.log(currencys)
    const [amount, setAmount] = useState(1);
    const [formCurrency,setFormCurrency] = useState("usd")
	const [toCurrency, setToCurrency] = useState("bgn");
	const [convertedAmout,setConvertedAmount] = useState(null)
	const swapCurrency = () => {
		setFormCurrency(toCurrency)
		setToCurrency(formCurrency)
	}
	const convertedCurrency = () => {
		fetch(
			`https://api.frankfurter.app/latest?amount=${amount}&from=${formCurrency}&to=${toCurrency}`
		)
			.then((res) => res.json())
			.then((data) => setConvertedAmount(data?.rates[toCurrency]))
			.catch((error) => console.log(error));
	}
  return (
		<div className="bg-red-300 p-5 rounded-xl shadow-xl">
			<h1>Currency Converter</h1>
			<div className="flex gap-4">
				<InputBox
					cyrrencys={currencys}
					title="Form"
					formCurrency={formCurrency}
					currency={formCurrency}
					setCurrency={setFormCurrency}
				/>
				<button onClick={swapCurrency}>Swap</button>
				<InputBox
					cyrrencys={currencys}
					title="to"
					toCurrency={toCurrency}
					currency={toCurrency}
					setCurrency={setToCurrency}
				/>
			</div>
			<div className="">
				<label htmlFor="amount" className="block my-3">
					Amount
				</label>
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="h-14 rounded-xl px-4"
				/>
			</div>
			<div className="my-3 w-full ">
				<button
					className="mx-auto bg-lime-600 px-4 py-2 rounded-xl text-white "
					onClick={convertedCurrency}
				>
					Convert
				</button>
			</div>
			<div className="my-3">
			  <p className="text-lime-400">Converted Amount : { convertedAmout}</p>
			</div>
		</div>
	);
}						

export default CurrencyConverter
