import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	reset,
	addByAmount,
	setToAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	// react local states
	const [incrementAmount, setIncrementAmount] = useState(count);

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	const setValue = (value) => {
		setIncrementAmount(value);
		dispatch(setToAmount(value));
	};

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(decrement())}>-</button>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>

			<input
				type="number"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>

			<div>
				<button onClick={() => dispatch(addByAmount(Number(incrementAmount)))}>
					Add Amount
				</button>

				<button onClick={() => resetAll()}>Reset Value</button>

				<button onClick={() => setValue(Number(incrementAmount))}>
					Set Value
				</button>
			</div>
		</section>
	);
};

export default Counter;
