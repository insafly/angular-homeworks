import { Observable } from 'rxjs';

const { random, floor } = Math;

export class ImageService {
  public dataSource: Observable<number> = new Observable((emitter) => {
    emitter.next(floor(random() * 4));
    setInterval(
      () => {
        emitter.next(floor(random() * 4));
      },
      6000
    );
  });
}
