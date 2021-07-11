import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, from } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

import { DetailsComponent } from './details.component';

let id = 355;

class ActivatedRouteStub {
  params = createResponse(355);
}
const games: Game[] = [
  {
    id: 355,
    background_image: 'path',
    name: 'Super Mario World',
    released: '2013-09-17',
    metacritic_url: 'metacritic_url',
    website: 'supermarioworld.com',
    description: 'Some Description',
    metacritic: 99,
    genres: [{ name: 'Advemture' }],
    parent_platforms: [{ platform: { slug: 'snes', name: 'SNES' } }],
    publishers: [
      {
        name: 'Nintendo',
      },
    ],
    ratings: [
      {
        id: 1,
        count: 999,
        title: 'exceptional',
      },
      {
        id: 2,
        count: 9,
        title: 'skip',
      },
    ],
    screenshots: [
      {
        image:
          'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
      },
    ],
    trailers: [
      {
        data: {
          max: '"https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4"',
        },
      },
    ],
  },
  {
    id: 356,
    background_image: 'path',
    name: 'Super Mario World',
    released: '2013-09-17',
    metacritic_url: 'metacritic_url',
    website: 'supermarioworld.com',
    description: 'Some Description',
    metacritic: 99,
    genres: [{ name: 'Advemture' }],
    parent_platforms: [{ platform: { slug: 'snes', name: 'SNES' } }],
    publishers: [
      {
        name: 'Nintendo',
      },
    ],
    ratings: [
      {
        id: 1,
        count: 999,
        title: 'exceptional',
      },
      {
        id: 2,
        count: 9,
        title: 'skip',
      },
    ],
    screenshots: [
      {
        image:
          'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
      },
    ],
    trailers: [
      {
        data: {
          max: '"https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4"',
        },
      },
    ],
  },
  {
    id: 357,
    background_image: 'path',
    name: 'Super Mario World',
    released: '2013-09-17',
    metacritic_url: 'metacritic_url',
    website: 'supermarioworld.com',
    description: 'Some Description',
    metacritic: 99,
    genres: [{ name: 'Advemture' }],
    parent_platforms: [{ platform: { slug: 'snes', name: 'SNES' } }],
    publishers: [
      {
        name: 'Nintendo',
      },
    ],
    ratings: [
      {
        id: 1,
        count: 999,
        title: 'exceptional',
      },
      {
        id: 2,
        count: 9,
        title: 'skip',
      },
    ],
    screenshots: [
      {
        image:
          'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
      },
    ],
    trailers: [
      {
        data: {
          max: '"https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4"',
        },
      },
    ],
  },
];

function createResponse(body: any) {
  return new Observable((subscriber: Observer<any>) => {
    subscriber.next(body);
  });
}

class serviceMock {
  getGameList() {
    return createResponse(games);
  }
  getGameDetails() {
    return createResponse(games[0]);
  }
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: HttpService, useClass: serviceMock },
        {
          provide: ActivatedRoute,
          useValue: { params: from([{ id: 355 }]) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
