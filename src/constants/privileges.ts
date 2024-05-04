import { Privilege } from '../types/privileges';

export const PRIVILEGES = Object.freeze({
    ADMIN: 'admin',
    FREE: 'free',
    PAID: 'paid',
    USER: 'user'
});

export const moderator: Readonly<Privilege> = Object.freeze({
    FREE: 'free',
});

