# Form_Validation For React.

This project is obseleted, you can try  [react-hook-form](https://www.npmjs.com/package/react-hook-form).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Available Screenshot From with register

<img src="public/img/Screenshot from 2021-05-07 11-07-13.png" alt="photo" />

## Available Screenshot From without register

<img src="public/img/Screenshot from 2021-05-07 11-07-19.png" alt="photo" />

## install

![](https://publiuslogic.com/images/react-hook-form.jpg)

how to install react-hook-form [npm i react-hook-form](https://publiuslogic.com/images/react-hook-form.jpg).

### Features

<ui>
  <li>Built with performance and DX in mind</li>
  <li>Embraces native form validation</li>
  <li>Out of the box integration with UI libraries</li>
  <li>Small size and no dependencies</li>
  <li>Follows HTML standard for validation</li>
  <li>Support Yup, Zod, Superstruct, Joi, Vest, class-validator, io-ts, nope or custom</li>
</ui>

### Usage


    } 
       import React from 'react';
       import { useForm } from 'react-hook-form';

       function App() {
     const {
       register,
       handleSubmit,
       formState: { errors },
       } = useForm();
     const onSubmit = (data) => console.log(data);

       return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register('firstName')} /> {/* register an input */}
         <input {...register('lastName', { required: true })} />
         {errors.lastName && <p>Last name is required.</p>}
         <input {...register('age', { pattern: /\d+/ })} />
         {errors.age && <p>Please enter number for age.</p>}
         <input type="submit" />
     </form>
      );
    }

### COME MY CODE 

Form.js  [code](Validation_Form.io/src/comonenet/Form.js)

### Development


    } 
       npm install
       npm start 



