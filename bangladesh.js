import {laptop} from './china.js';
console.log("Imported laptops that are exported from China = ",laptop);

import { mobilePhone,headPhone} from './china.js';

mobilePhone();
headPhone()

import { myChina } from './china.js';

let object = new myChina();
object.toys();

//default export import 

import TwoNumber from './china.js'

let object1 = new TwoNumber(2,3)
object1.demo()