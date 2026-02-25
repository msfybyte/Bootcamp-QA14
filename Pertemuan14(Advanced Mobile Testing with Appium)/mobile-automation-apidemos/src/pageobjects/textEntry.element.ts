class TextEntryElement {

    // Navigation
    get appMenu() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }

    get alertDialogs() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    get textEntryDialog() {
        return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
    }

    // Form
    get nameField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
    }
}

export default new TextEntryElement();