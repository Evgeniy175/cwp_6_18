import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ResAvatar from '../../images/user-avatars/res.jpg';
import PfaAvatar from '../../images/user-avatars/pfa.jpg';
import SaaAvatar from '../../images/user-avatars/saa.jpg';
import KaaAvatar from '../../images/user-avatars/kaa.jpg';
import ZiiAvatar from '../../images/user-avatars/zii.jpg';

@observer
class Users extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default Users;

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

export const USERS = [
  {
    id: 1,
    name: 'E. Ryabchenko',
    email: 'evgeniy.ryabchenko.175@gmail.com',
    role: ROLES.ADMIN,
    avatar: ResAvatar
  }, {
    id: 2,
    name: 'F. Plehanov',
    email: 'f.p@gmail.com',
    role: ROLES.USER,
    avatar: PfaAvatar
  }, {
    id: 3,
    name: 'A. Shakinko',
    email: 'saa@gmail.com',
    role: ROLES.USER,
    avatar: SaaAvatar
  }, {
    id: 4,
    name: 'A. Korovkin',
    email: 'kaa@gmail.com',
    role: ROLES.USER,
    avatar: KaaAvatar
  }, {
    id: 5,
    name: 'I. Zelenko',
    email: 'zii@gmail.com',
    role: ROLES.USER,
    avatar: ZiiAvatar
  }
];
