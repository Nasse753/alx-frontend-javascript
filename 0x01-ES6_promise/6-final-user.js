import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
[
  { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
  { status: 'rejected', value: Error: bob_dylan.jpg cannot be processed }
]
}
