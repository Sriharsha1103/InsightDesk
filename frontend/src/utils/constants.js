export const MENU_ITEMS = ['Publications', 'Patents', 'Reasearch Projects', 'Consultancy Projects'];
export const ADMIN_MENU_ITEMS = [...MENU_ITEMS, 'Manage Users', 'Settings'];
export const USER_MENU_ITEMS = [...MENU_ITEMS, 'Profile', 'Settings'];

export const ROLES = {
    SUPERADMIN: 'super-admin',
    ADMIN: 'admin',
    USER: 'user',
};

export const PERMISSIONS = {
    VIEW: 'view',
    EDIT: 'edit',
    DELETE: 'delete',
};

export const DEFAULT_PASSWORD = 'Welcome@123';

export const FOOTER = {
    COPYRIGHT: '© 2023 Your Company',
    LINKS: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' },
    ],
    SOCIAL_MEDIA: [
        { platform: 'Facebook', url: 'https://facebook.com' },
        { platform: 'Twitter', url: 'https://twitter.com' },
        { platform: 'LinkedIn', url: 'https://linkedin.com' },
    ],
    CONTACT: {
        EMAIL: 'info@bvrithyderabad.edu.in | principal@bvrithyderabad.edu.in',
        PHONE: '+91 40 4241 7773',
    },
    ADDRESS: {
        STREET: '123 Your St',
        CITY: 'Your City',
        ZIP: '12345',
    },
    ADDITIONAL_INFO: {
        HOURS: 'Mon-Fri: 9am - 5pm',
        SUPPORT_EMAIL: 'info@bvrithyderabad.edu.in',
        WEBSITE: 'https://bvrithyderabad.edu.in',
    },
};