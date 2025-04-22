import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'togglePwd'
})
export class TogglePasswordDirective {
  private _show = false;

  @HostBinding('attr.type') get type() {
    return this._show ? 'text' : 'password';
  }

  toggle() {
    this._show = !this._show;
  }

  get shown() {
    return this._show;
  }
}

