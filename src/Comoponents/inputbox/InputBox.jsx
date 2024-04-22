

import React from 'react'

const InputBox = ({ cyrrencys,currency, title, setCurrency }) => {
	return (
		<div>
			<label htmlFor={title}>{title}</label>
			<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
				{cyrrencys?.map((currency) => (
					<option value={currency} key={currency}>
						{currency}
					</option>
				))}
			</select>
		</div>
	);
};

export default InputBox
