import React from 'react'
import { AutoForm } from 'redux-autoform';
import { EditComponentFactory } from 'redux-autoform-bootstrap-ui';

const schema = {
    name: {
        type: 'string',
        displayName: 'Name',
        required: true
    },
    lastName: {
        type: 'string',
        displayName: 'Last Name',
        required: true
    }
};

const autoFormProps = {
    form: 'contact',
    schema:  schema,
    componentFactory: EditComponentFactory,
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    overwriteOnInitialValuesChange: undefined,
    buttonBar: () => <button type="submit">Submit Values</button>
};

const ContactForm = _ => <AutoForm {...autoFormProps} />;

export default ContactForm;