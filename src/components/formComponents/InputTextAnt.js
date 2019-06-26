import React from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from 'antd';
import { Form } from 'antd';

export default observer(({formEl}) => (

    <Form.Item validateStatus={formEl.error ? 'error' : ''} help={formEl.error || ''}>
        {(
            <Input
                placeholder={formEl.label}
                {...formEl.bind()}
            />
        )}
    </Form.Item>
))