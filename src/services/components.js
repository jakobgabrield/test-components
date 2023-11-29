import { request } from './request';

export function getComponent(cid) {
	return request(`/components/${cid}`);
}
