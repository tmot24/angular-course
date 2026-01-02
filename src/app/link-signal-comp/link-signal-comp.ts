import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { PostService } from '../request/service/post.service.js';

@Component({
  selector: 'app-link-signal-comp',
  imports: [],
  templateUrl: './link-signal-comp.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkSignalComp {
  private postService = inject(PostService);
  public posts = this.postService.postsResource.value;

  protected shippingAddresses = signal([ 'New-York', 'London', 'Amsterdam', 'Paris' ]);
  // protected selectedOption = linkedSignal(() => this.shippingAddresses()[0]);
  protected selectedOption = linkedSignal<string[], string>({
    source: this.shippingAddresses,
    computation: (newOptions, previous) => {
      console.log('previous', previous);
      return newOptions[0];
    },
    // equal: (a, b) => a.length < b.length,
  });

  protected changeShippingAddress(index: number) {
    this.selectedOption.set(this.shippingAddresses()[index]);
  }

  private count = signal(0);

  protected changeShippingAddresses() {
    if (this.count() % 2 === 1) {
      this.shippingAddresses.set([ 'New-York', 'London', 'Amsterdam', 'Paris' ]);
    } else {
      this.shippingAddresses.set([ 'Moscow', 'Novgorod', 'Samara', 'Omsk' ]);
    }
    this.count.update((count) => count + 1);
  }
}
