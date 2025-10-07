import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { Post, PostService } from '../service/post.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-item',
  imports: [
    AsyncPipe
  ],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
  private postService = inject(PostService);
  private route = inject(ActivatedRoute);

  // превращаем paramMap -> число id в сигнал
  private id = toSignal(
    this.route.paramMap.pipe(map(pm => {
      const id = Number(pm.get('id'));
      return Number.isFinite(id) ? id : NaN;
    })),
    { initialValue: NaN }
  );

  // вычисляем object декларативно — автоматически обновится при смене id
  protected post = computed<Observable<Post> | undefined>(() => {
    const id = this.id();
    return Number.isFinite(id) ? this.postService.getPostById(id) : undefined;
  });
}
