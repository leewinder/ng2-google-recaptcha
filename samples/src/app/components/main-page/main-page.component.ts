import { Component } from '@angular/core';

@Component({

    moduleId: module.id,
    selector: 'main-page',

    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.css'],
})
export class MainPageComponent {

    /* tslint:disable:no-unused-variable */
    private recaptchaSiteKey = '6LdTCQoUAAAAAHJio3GAtjUforG-VETulqHWfuNA';
    private recaptchaStyle = {
        theme: 'dark',
        type: 'audio',
    };

    private recaptcha1Id = 'recaptcha_1';
    private recaptcha2Id = 'recaptcha_2';

    //
    // Called when the Captcha has finished
    //
    private onCaptchaComplete(response: any) {

        console.log('reCAPTCHA response recieved:');
        console.log(response);

        // If we succeeded, reset it in a couple of seconds as
        // part of the demo showing how to use it
        if (response.success === true) {
            setTimeout(() => {
                response.recaptcha.resetRecaptcha();
            }, 2000);
        }
    }
    /* tslint:enable:no-unused-variable */
}
