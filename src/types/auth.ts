export enum ROLES {
  ADMIN = 'Admin',
  ATTENDEE = 'Attendee',
  ORGANIZER = 'Organizer',
}

export type GlobalEvents = 'Logout' | 'Config update' | 'Push message';
export type PrivateEvents = 'Logout' | 'Notificationcount' | 'Push message';

export type PusherChannels = {
  key: string;
  cluster: string;
  channels: {
    global: GlobalEvents[];
    [key: `private-${string}`]: PrivateEvents[];
  };
};

export type User = {
  idx: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  avatar_url: string;
  bio: string;
  has_password: string;
  role: ROLES;
  is_profile_complete: string;
  pusher: PusherChannels;
};

export type GoogleLoginReq = {
  access_token: string;
};

export type Signup = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
};

export type LoginReq = {
  email: string;
  password: string;
};

export type LoginRes = {
  key: string; //token
  user: User;
};
