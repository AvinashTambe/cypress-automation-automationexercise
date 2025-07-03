import { faker } from '@faker-js/faker';

// Define the SignupData type for strong typing
export type SignupData = {
  signupName: string;
  signupEmail: string;
  title: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  country: string;
  [key: string]: string; // <-- Add this line
};

export function generateRandomSignupData(): SignupData {
  return {
    signupName: faker.person.firstName(),
    signupEmail: faker.internet.email(),
    title: faker.helpers.arrayElement(['Mr', 'Mrs']),
    password: faker.internet.password({ length: 10 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
    birthDay: String(faker.number.int({ min: 1, max: 28 })),
    birthMonth: String(faker.number.int({ min: 1, max: 12 })),
    birthYear: String(faker.number.int({ min: 1970, max: 2005 })),
    country: faker.location.country(),
  };
}
