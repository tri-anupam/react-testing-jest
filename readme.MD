# React Testing Library Jest

- As a developer, our primary goal is to build software that works
- To ensure our software works, we test the application
- We check if our software works as expected.

## Manual Testing

- An individual will open the website, interact with the website and ensure everything works as intended.
- If a new feature is released, you repeat the same steps.
- You may have to test not only the new features but also the existing features.

#### Drawbacks

- Time Consuming
- Complex repetitive tasks has a risk of human error
- You may not get a chance to test all the features you should

## Automated Testing

- Automated tests are program that automates the task of testing your software
- Write code to test the software code
- Additional effort required when you develop a feature

#### Advantages

- Not time Consuming
- Reliable, consistent and not error prone
- Easy to indentify and fix features that break tests
- Gives confidence when shipping software

## JEST vs RTL

### Jest

- Jest is a javascript testing framework
- Jest is a test that finds tests, runs the test, determines whether the tests passed or failed and reports it back in a human readable manner.

### RTL

- Javascript testing utility that provides virtual DOM for testing React components
- Testing Library is infact a family of package which helps test UI components
- The core library is called DOM Testing library and RTL is simply a wrapper around this core library to test React applications in an easier way.

## Types of tests

- Unit Test
- Integration Test
- End to End(E2E) Test

### Unit Test

- Focus is on testing the individual building blocks of an application such as a class or a function or a function or a component
- Each unit or building blocks is tested in isolation, independent of other units
- Dependencies are mocked
- Run in a short amount of time and make it very easy to pinpoint failures
- Relatively easier to write and maintain

### Integration Test

- Focus is on testing a combination of units and ensuring they work together.
- Take longer than unit test

### E2E Test

- Focus is on testing the entire application flow and ensuring it works as designed from start to finish.
- Involves in a real UI, a ral backend database, real services etc.
- Take the longest as they cover the most amount of code
- Have a cost implication as you interact with real APIs that may charge based on the number of requests.
