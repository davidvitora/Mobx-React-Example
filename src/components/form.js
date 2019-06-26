import React from 'react';
import { observer } from 'mobx-react-lite'
import { Button, Form } from 'antd';

import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import InputTextAnt from './formComponents/InputTextAnt.js'

const plugins = {
    dvr: dvr(validatorjs),
};

const fields = [{
    name: 'username',
    label: 'Username',
    placeholder: 'Insert User',
    rules: 'required|string|between:5,25',
},{
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
}, {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
}, {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
}];

const hooks = {
    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    }
}

const form = new MobxReactForm({ fields }, { plugins, hooks });

const FormExample = observer(({ form }) => (
    <Form>
        <InputTextAnt formEl={form.$('username')}/>
        <InputTextAnt formEl={form.$('email')}/>
        <InputTextAnt formEl={form.$('password')}/>
        <InputTextAnt formEl={form.$('passwordConfirm')}/>
        <Button onClick={form.onSubmit}>Submit</Button>
        <Button onClick={form.onClear}>Clear</Button>
        <Button onClick={form.onReset}>Reset</Button>
        <p>{form.error}</p>
    </Form>
))

export default () =>  <FormExample form={form} /> 