import { expect } from '@wdio/globals'

describe('API Demos - Alert Dialog Test', () => {

    it('Should input and verify text entry dialog', async () => {

        await $('~App').click()
        await $('~Alert Dialogs').click()
        await $('~Text Entry dialog').click()

        const nameField = await $('id=io.appium.android.apis:id/username_edit')
        await nameField.setValue('Sofyan')

        const passwordField = await $('id=io.appium.android.apis:id/password_edit')
        await passwordField.setValue('123456')

        await expect(nameField).toHaveText('Sofyan')

        const okButton = await $('id=android:id/button1')
        await okButton.click()

        await expect(okButton).not.toBeDisplayed()
    })

})