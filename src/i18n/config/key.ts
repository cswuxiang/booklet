import sha1 from 'sha1';

export function fallbackKey(ns, value) {
	return sha1(value); // return a sha1 as the key
}