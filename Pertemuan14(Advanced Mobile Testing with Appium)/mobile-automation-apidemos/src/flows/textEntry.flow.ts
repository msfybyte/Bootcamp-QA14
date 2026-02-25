import TextEntryAction from '../actions/textEntry.action';

class TextEntryFlow {

    async navigateAndFillForm(name: string, password: string) {
        await TextEntryAction.openTextEntryDialog();
        await TextEntryAction.inputName(name);
        await TextEntryAction.inputPassword(password);
    }

    async getFormValues() {
        return {
            name: await TextEntryAction.getNameValue(),
            password: await TextEntryAction.getPasswordValue()
        };
    }
}

export default new TextEntryFlow();