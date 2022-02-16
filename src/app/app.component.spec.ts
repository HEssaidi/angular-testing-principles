import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteTextComponent } from './components/quote-text/quote-text.component';

describe('AppComponent', () => {
  // const routes: Routes = [
  //   { path: 'home', component: HomeComponent },
  //   { path: 'about', component: AboutComponent },
  //   { path: '', redirectTo: '/home', pathMatch: 'full'}
  // ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        // HomeComponent,
        // AboutComponent, 
        // QuoteTextComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing-principles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-principles');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to angular-testing-principles!');
  });
  it('should contain "ghi" elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance; // AppComponent test instance    
    expect(appComponent.strArray).toContain('ghi');
  });
});
