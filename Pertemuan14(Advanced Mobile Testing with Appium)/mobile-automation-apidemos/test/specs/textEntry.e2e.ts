import { expect } from 'chai';
import TextEntryFlow from '../../src/flows/textEntry.flow';

describe('APIDemos - Text Entry Dialog', () => {

    it('Should input and validate name & password', async () => {

        const name = 'Sofyan';
        const password = '12345678';

        await TextEntryFlow.navigateAndFillForm(name, password);

        const form = await TextEntryFlow.getFormValues();

        // Assertion name
        expect(form.name).to.equal(name);

        // Assertion password length (masked field)
        expect(form.password.length).to.equal(password.length);
    });

});