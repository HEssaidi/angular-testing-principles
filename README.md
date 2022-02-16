# AngularTestingPrinciples

#### describe 
We use “describe” to start our test block with the title matching the tested component name.
We use an `async` before each. The purpose of the async is to let all the possible asynchronous code to finish before continuing.

#### TestBed 
To configure and initialize environment for unit testing and provide methods for creating components and services in unit tests, we use ``TestBed``. It is the primary api for writing unit tests for Angular applications and libraries.
**Any module, component or service that your tested component needs have to be included in the testbed.**


#### xdescribe 
To exclude some of test cases 


#### Built-In Matchers
Jasmine comes with a few pre-built matchers like so: [Built-In Matchers](https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/#_built_in_matchers)