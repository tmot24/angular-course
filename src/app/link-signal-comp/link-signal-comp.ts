import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostService } from '../request/service/post.service.js';

@Component({
  selector: 'app-link-signal-comp',
  imports: [],
  templateUrl: './link-signal-comp.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkSignalComp {
  private postService = inject(PostService);
  public posts = this.postService.postsResource.value
}
