import { Injectable } from '@angular/core';

// nativescript
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { device, isIOS } from 'tns-core-modules/platform';
import * as timer from 'tns-core-modules/timer';

// app
import { isString } from '@xplat/utils';

@Injectable()
export class TNSWindowPlatformService {
  private _dialogOpened = false;

  public get navigator(): any {
    return {
      language: device.language,
      userAgent: 'nativescript'
    };
  }
  public get location(): any {
    return {
      host: 'nativescript'
    };
  }

  public alert(msg: string): Promise<any> {
    return new Promise(resolve => {
      if (!this._dialogOpened && msg) {
        this._dialogOpened = true;
        if (typeof msg === 'string') {
          const options: dialogs.AlertOptions = {
            message: <string>msg,
            okButtonText: 'Ok'
          };
          dialogs.alert(options).then(ok => {
            this._dialogOpened = false;
            resolve();
          });
        }
      }
    });
  }

  public confirm(message: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this._dialogOpened) {
        this._dialogOpened = true;
        const options: dialogs.ConfirmOptions = {
          title: 'Confirm',
          message,
          okButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        };

        dialogs.confirm(options).then(ok => {
          this._dialogOpened = false;
          if (ok) {
            resolve();
          } else {
            reject();
          }
        });
      }
    });
  }

  // helps ensure return value is a number and not a zone wrapped value
  public setTimeout(
    handler: (...args: any[]) => void,
    timeout?: number
  ): number {
    return timer.setTimeout(handler, timeout);
  }
  public clearTimeout(timeoutId: number): void {
    timer.clearTimeout(timeoutId);
  }
  public setInterval(
    handler: (...args: any[]) => void,
    ms?: number,
    ...args: any[]
  ): number {
    return timer.setInterval(handler, ms);
  }
  public clearInterval(intervalId: number): void {
    timer.clearInterval(intervalId);
  }
}
