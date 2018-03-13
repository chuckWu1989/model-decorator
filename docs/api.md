## Documentation

### DefineProps([,options])

#### Define a class member. It is necessary and should be put at the first site if you want to use some validation decorators

#### Parameters:
* options [`object`]: Options about the behavior of get and set in class member. There are
  * checkDefault [`bool`]: If true, the default value would be validated. Default is `false`.
  * silence [`bool`]: If true, the type validation would be set as silence mode (without log error). Default is `false`.

---

### ViewModel(model)

#### Create a higher order function to connect viewmodel and component.

* model [`component`]: The React component.

---

### Type(type, [, options])

#### Validate the type of class member

#### Parameters:
* type [`prop-types`]: The type of the class member. model-decorator use props-types to define the type.
* options [`object`]:
  * errorMessage [`string`]: The error message. Default is `undefined`.

---

### StringLen(bound, [, options])

#### Validate the length of string

#### Parameters:
* bound [`array`]: The boundary of string length. For example: [0, 10] where 0 is lower bound and 10 is upper bound.
* options [`object`]:
  * errorMessage [`string`]: The error message. Default is `undefined`.
  * mode [`string`]: The mode of bound. There are eight modes.
  1. `[]`: lower bound <= value <= upper bound
  2. `(]`: lower bound < value <= upper bound
  3. `[)`: lower bound <= value < upper bound
  4. `()`: lower bound < value < upper bound
  5. `][`: lower bound >= value || upper bound <= value
  6. `](`: lower bound >= value || upper bound < value
  7. `)[`: lower bound > value || upper bound <= value
  8. `)(`: lower bound > value || upper bound < value

---

### Required([, options])

#### Validate if the data is satisfy with the required criterions

#### Parameters:
* options [`object`]:
  * errorMessage [`string`]: The error message. Default is `undefined`.
  * criterions [`function`]: The criterion of required. for example: (value) => value !== '123'. Default is (value) => value !== undefined

---

### Regex(regex, [, options])

#### Validate data by regex

#### Parameters:
* regex [`regex`]: regex string
* options [`object`]:
  * errorMessage [`string`]: The error message. Default is `undefined`.

---

### Range(regex, [, options])

#### Validate the range of number

#### Parameters:
* bound [`array`]: The boundary of string length. For example: [0, 10] where 0 is lower bound and 10 is upper bound.
* options [`object`]:
  * errorMessage [`string`]: The error message. Default is `undefined`.
  *  mode [`string`]: The mode of bound. Same as StringLen.

---

### DisplayName(title)

#### Display name of class member

#### Parameters:
* title [`string`]: The title name.

---

### DefaultValue(value)

#### Set default value

#### Parameters:
* value [`any`]: The default value

---

### Descriptor([, check], [, enhancer], [, message])

#### Describe the behavior of class member. It's a basic method to establish own validation method.

#### Parameters:
* check [`() => return bool`]: A method to define how to validate class member. Default is `null`.
* enhancer[`(refObj, instanceObj) => ()`]: A method to enhance class member. You can add any method on to instanceObj. Default is `null`.
  * refObj [`object`]: An object saved in closure. Its' shape is { value, error }
  * instanceObj [`object`]: An object with method to operate refObj. The default operator is val and err.
* message [`string`]: Error message

---

### BaseModel

#### Basic model with build-in methods like getValues, setValues etc.

#### Methods:
* getValues [`() => return object`]: Get all values in class members. The return value would be an object with key pair format.
* setValues [`props => {}`]: Set props into class. The property dismatch with class would be ignored.
* clone [`() => return model`]: Clone an instanced model.
* isEqual [`() => return bool`]: Compare with two models. It should be noticed that it's a shallow comparison.
* checkErrors [`() => return array`]: Check all class member if there is an validation error. If true, the result would be presented as array of errors.
