import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  map,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  searchTermByCharacters = new Subject<string>();
  charactersResults$!: Observable<any>;
  planetAndCharactersResults$!: Observable<any>;
  isLoading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private readonly mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.initLoadingState();
    this.initCharacterEvents();
  }

  changeCharactersInput(element: any): void {
    const inputValue: string = element.target.value;

    this.searchTermByCharacters.next(inputValue);
  }

  initCharacterEvents(): void {
    this.charactersResults$ = this.searchTermByCharacters.pipe(

        filter(value => value.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this.mockDataService.getCharacters(value))
    );
  }

  loadCharactersAndPlanet(): void {
    this.planetAndCharactersResults$ = forkJoin({
      characters: this.mockDataService.getCharacters(),
      planets: this.mockDataService.getPlanets(),
    }).pipe(
        map(({ characters, planets }) => [
          ...characters.map((c: any) => c.name),
          ...planets.map((p: any) => p.name),
        ])
    );
  }

  initLoadingState(): void {
    const loadingSub = combineLatest([
      this.mockDataService.getCharactersLoader(),
      this.mockDataService.getPlanetLoader(),
    ]).subscribe(([charactersLoading, planetsLoading]) => {
      this.isLoading = this.areAllValuesTrue([
        charactersLoading,
        planetsLoading,
      ]);
    });

    this.subscriptions.push(loadingSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  areAllValuesTrue(elements: boolean[]): boolean {
    return elements.every((el) => el);
  }
}
