import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostInput } from '../post-input/post-input.js';
import { Post } from '../post/post.js';

@Component({
  selector: 'app-post-feed',
  imports: [
    PostInput,
    Post,
  ],
  templateUrl: './post-feed.html',
  styleUrl: './post-feed.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostFeed {

}
