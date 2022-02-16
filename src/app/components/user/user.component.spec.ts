import { UserService } from './user.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserServiceMock } from '../../mocks/user.service.mock';

describe('UserComponent', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let userService: UserService
    let h3: HTMLElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserComponent
            ],
            providers: [
                // { provide: UserService, useClass: UserServiceMock }
                UserService
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance; // UserComponent test instance
            userService = TestBed.inject(UserService)
        });
    }));

    it(`should have 2 users`, async(() => {
        expect(comp.userCount).toEqual(2);
    }));

    it(`html should render one user`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('user1');
    }));

    it(`should register userRequest`, async(() => {
        expect(comp.sendRequestByUser()).toEqual(3);
    }));
    it(`should un-register userRequest`, async(() => {
        expect(comp.unSendRequestByUser()).toEqual(1);
    }));
    // it(`should return the value "request available !!" `, async(() => {
    //     spyOn(userService, "checkAuthentication").and.returnValue(true);
    //     expect(comp.sendRequest()).toEqual("request available !!");
    //     expect(userService.checkAuthentication).toHaveBeenCalled();
    // }));

    it(`h1 tag should have isRequestAvailable variable `, async(() => {
        comp.sendRequest();
        h3 = fixture.nativeElement.querySelector('h3');
        // h3 = fixture.debugElement.query(By.css('h3')).nativeElement;

        fixture.detectChanges();
        expect(h3.innerHTML).toBe(comp.isRequestAvailable);
    }));
});
