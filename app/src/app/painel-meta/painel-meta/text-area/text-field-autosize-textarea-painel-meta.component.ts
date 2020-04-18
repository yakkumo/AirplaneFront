import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component,OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormGroup } from '@angular/forms'
import { Directive, ElementRef, Renderer2 } from '@angular/core';

/** @title Auto-resizing textarea */
@Component({
  selector: 'app-text-field-autosize-textarea-painel-meta',
  templateUrl: './text-field-autosize-textarea-painel-meta.component.html',
  styleUrls: ['./text-field-autosize-textarea-painel-meta.component.scss'],
})

export class TextFieldAutosizePainelMetas {
  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  teste: string;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(false));
  }

  somethingChanged() {
    this.notify.emit(this.teste);
  }
}
