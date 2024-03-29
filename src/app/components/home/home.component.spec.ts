import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observer } from 'rxjs';
import { Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

import { HomeComponent } from './home.component';

const games: Game[] = [
  {
    id: 355,
    background_image: 'path',
    name: 'Super Mario World',
    released: '13/09/2014',
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
    released: '13/09/2014',
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
    released: '13/09/2014',
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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppModule],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
