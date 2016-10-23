// Imports
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

//
// Main recpatcha component
//
@Component({

    moduleId: module.id,
    selector: 'ng2-google-recaptcha',

    template: `<div id="{{recaptchaId}}" ng2GoogleRecaptchaRender (onCaptchaComplete)="onCaptchaCompleted($event)"
                                                              [renderDelay]="renderDelay"
                                                              [siteKey]="siteKey"
                                                              [recaptchaId]="recaptchaId"
                                                              [captchaStyle]="captchaStyle"></div>`,
})
export class CreateRecaptchaComponent implements OnInit {

    // Properties passed through
    @Output('onCaptchaComplete') onCaptchaComplete: EventEmitter<any> = new EventEmitter();

    @Input('siteKey') siteKey: string = null;
    @Input('captchaStyle') captchaStyle: any = null;

    @Input('renderDelay') renderDelay: number = 500;

    @Input('recaptchaId') recaptchaId: string = 'grecaptcha';

    //
    // Called to initialise the object
    //
    ngOnInit() {
    }

    //
    // Called when the Captcha has finished
    //
    onCaptchaCompleted(data: string) {

        // Pass through whether we succeeded or not
        if (data != null) {
            this.onCaptchaComplete.emit({
                success: true,
                data: data,
            });
        } else {
            this.onCaptchaComplete.emit({
                success: false,
                data: null,
            });
        }
    }
}
