export const random = (min: number, max: number) => {
	if (max == null) {
		max = min;
		min = 0;
	}
	if (min > max) {
		var tmp = min;
		min = max;
		max = tmp;
	}
	return min + (max - min) * Math.random();
};
