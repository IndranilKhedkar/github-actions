import { RIGHT_KEYS } from '../constants/RIGHT_KEYS';
import { hasRight } from './hasRight';

export const isAdmin = (user: any) => hasRight(user, RIGHT_KEYS.AIRVANTAGE_ADMINISTRATION);
