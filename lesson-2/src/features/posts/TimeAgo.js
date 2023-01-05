import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";

const TimeAgo = ({ timestamp }) => {
	let timeAgo = String();
	if (timestamp) {
		const date = parseISO(timestamp);
		console.log(timestamp, date);
		const timePeriod = formatDistanceToNow(date);
		timeAgo = `${timePeriod} Ago`;
	}
	return (
		<span title={timestamp}>
			&nbsp; <i>{timeAgo}</i>
		</span>
	);
};

export default TimeAgo;
