import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Game } from 'src/app/models';

import { GameTabsComponent } from './game-tabs.component';

describe('GameTabsComponent', () => {
  const gameMock: Game = {
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
  };
  let component: GameTabsComponent;
  let fixture: ComponentFixture<GameTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [GameTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabsComponent);
    component = fixture.componentInstance;
    component.game = gameMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
