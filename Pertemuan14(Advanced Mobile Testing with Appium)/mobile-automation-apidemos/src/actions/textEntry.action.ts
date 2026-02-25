import TextEntryElement from '../pageobjects/textEntry.element';

class TextEntryAction {

    async openTextEntryDialog() {
        await TextEntryElement.appMenu.click();
        await TextEntryElement.alertDialogs.click();
        await TextEntryElement.textEntryDialog.click();
    }

    async inputName(name: string) {
        await TextEntryElement.nameField.setValue(name);
    }

    async inputPassword(password: string) {
        await TextEntryElement.passwordField.setValue(password);
    }

    async getNameValue() {
        return await TextEntryElement.nameField.getText();
    }

    async getPasswordValue() {
        return await TextEntryElement.passwordField.getText();
    }
}

export default new TextEntryAction();