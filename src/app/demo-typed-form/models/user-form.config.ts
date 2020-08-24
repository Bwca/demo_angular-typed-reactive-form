import { TypedFormBuilderConfig } from 'ngx-typed-reactive-form';

import { FriendDto, UserDto } from './user.dto';

export const USER_FORM_CONFIG: TypedFormBuilderConfig<UserDto> = {
  id: [''],
  registered: [''],
  name: [''],
  isActive: [false],
  age: [0],
  about: [''],
  balance: [''],
  contacts: {
    address: {
      apartment: [''],
      building: [''],
      city: [''],
      street: [''],
    },
    email: [''],
    phone: [''],
  },
  friends: [
    [
      {
        id: 1,
        name: 'Uncle Bob',
      }, {
        id: 1,
        name:  'Uncle Jun',
      },
    ],
  ],
  tags: [['']],
};
