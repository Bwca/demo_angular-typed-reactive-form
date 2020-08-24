import { Validators } from '@angular/forms';

import { TypedFormBuilderConfig } from 'ngx-typed-reactive-form';

import { UserDto } from './user.dto';

export const USER_FORM_CONFIG: TypedFormBuilderConfig<UserDto> = {
  id: ['1312332'],
  name: ['John Doe'],
  registered: ['1992-12-12', Validators.required],
  isActive: [true],
  age: [99],
  about: ['This is a generic description'],
  balance: ['12412412'],
  contacts: {
    address: {
      apartment: ['App. 99'],
      building: ['92/B'],
      city: ['City'],
      street: ['Street'],
    },
    email: ['some-email@email.com'],
    phone: ['1-458-485-45-54'],
  },
  friends: [
    {
      id: 1,
      name: 'Jane Doe',
    },
    {
      id: 1,
      name: 'Jack Doe',
    },
  ],
  tags: [['tag one', 'tag two']],
};
