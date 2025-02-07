  import {
// definition syntax 1.0.0 src/`property-assignment-reference.ts`/
//documentation ```ts\nmodule "property-assignment-reference.ts"\n```
    propertyAssignment,
//  ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
    shorthandPropertyAssignment,
//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
  } from './property-assignment'
//       ^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/
  
  export function run(): string {
//                ^^^ definition syntax 1.0.0 src/`property-assignment-reference.ts`/run().
//                documentation ```ts\nfunction run(): string\n```
    return propertyAssignment().a + shorthandPropertyAssignment().a
//         ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/propertyAssignment().
//                              ^ reference syntax 1.0.0 src/`property-assignment.ts`/a0:
//                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`property-assignment.ts`/shorthandPropertyAssignment().
//                                                                ^ reference syntax 1.0.0 src/`property-assignment.ts`/a1:
  }
  
