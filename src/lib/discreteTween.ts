/* eslint-disable @typescript-eslint/no-explicit-any */
import { tweened as internal } from 'svelte/motion';

export const tweened = (options: any) => {
	const values = options?.values;
	const store = internal(0, options);

	return {
		run() {
			store.set(values.length - 1);
		},
		reset() {
			store.set(0, { duration: 0 });
		},
		reverse() {
			store.set(0);
		},
		subscribe(callback: any) {
			return store.subscribe(($index) => {
				const item = values[Math.round($index)];
				callback(item);
			});
		}
	};
};
