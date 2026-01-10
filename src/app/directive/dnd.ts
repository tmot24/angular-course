import { Directive, HostListener, output, signal } from '@angular/core';

@Directive({
  selector: '[appDnd]',
  host: {
    '[class.fileOver]': 'fileOver()',
  },
})
export class Dnd {
  fileOver = signal(false);
  fileDropped = output<File | undefined>();

  @HostListener('dragover', [ '$event' ])
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOver.set(true);
  }

  @HostListener('dragleave', [ '$event' ])
  onDragLeave(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOver.set(false);
  }

  @HostListener('drop', [ '$event' ])
  onDrop(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOver.set(false);
    this.fileDropped.emit(event.dataTransfer?.files[0]);
  }

}
