import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increase())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrease())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
