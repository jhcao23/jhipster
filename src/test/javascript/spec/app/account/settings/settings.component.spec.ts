<<<<<<< HEAD
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { JhipsterTestModule } from '../../../test.module';
=======
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
import { Principal, AccountService } from '../../../../../../main/webapp/app/shared';
import { SettingsComponent } from '../../../../../../main/webapp/app/account/settings/settings.component';
import { MockAccountService } from '../../../helpers/mock-account.service';
import { MockPrincipal } from '../../../helpers/mock-principal.service';
import { JhiTrackerService } from '../../../../../../main/webapp/app/shared/tracker/tracker.service';
import { MockTrackerService } from '../../../helpers/mock-tracker.service';

<<<<<<< HEAD
=======

>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
describe('Component Tests', () => {

    describe('SettingsComponent', () => {

        let comp: SettingsComponent;
        let fixture: ComponentFixture<SettingsComponent>;
<<<<<<< HEAD
        let mockAuth: any;
        let mockPrincipal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [SettingsComponent],
                providers: [
=======
        let mockAuth: MockAccountService;
        let mockPrincipal: MockPrincipal;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [SettingsComponent],
                providers: [
                    MockBackend,
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    {
                        provide: Principal,
                        useClass: MockPrincipal
                    },
                    {
                        provide: AccountService,
                        useClass: MockAccountService
                    },
                    {
                        provide: JhiTrackerService,
                        useClass: MockTrackerService
                    },
<<<<<<< HEAD
                ]
            }).overrideTemplate(SettingsComponent, '')
            .compileComponents();
=======
                    BaseRequestOptions,
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    }
                ]
            }).overrideComponent(SettingsComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SettingsComponent);
            comp = fixture.componentInstance;
            mockAuth = fixture.debugElement.injector.get(AccountService);
            mockPrincipal = fixture.debugElement.injector.get(Principal);
        });

<<<<<<< HEAD
        it('should send the current identity upon save', () => {
            // GIVEN
            const accountValues = {
=======
        it('should send the current identity upon save', function () {
            // GIVEN
            let accountValues = {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                firstName: 'John',
                lastName: 'Doe',

                activated: true,
                email: 'john.doe@mail.com',
                langKey: 'en',
                login: 'john'
            };
            mockPrincipal.setResponse(accountValues);

            // WHEN
            comp.settingsAccount = accountValues;
            comp.save();

            // THEN
            expect(mockPrincipal.identitySpy).toHaveBeenCalled();
            expect(mockAuth.saveSpy).toHaveBeenCalledWith(accountValues);
            expect(comp.settingsAccount).toEqual(accountValues);
        });

<<<<<<< HEAD
        it('should notify of success upon successful save', () => {
            // GIVEN
            const accountValues = {
=======
        it('should notify of success upon successful save', function () {
            // GIVEN
            let accountValues = {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                firstName: 'John',
                lastName: 'Doe'
            };
            mockPrincipal.setResponse(accountValues);

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });

<<<<<<< HEAD
        it('should notify of error upon failed save', () => {
=======
        it('should notify of error upon failed save', function () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            // GIVEN
            mockAuth.saveSpy.and.returnValue(Observable.throw('ERROR'));

            // WHEN
            comp.save();

            // THEN
            expect(comp.error).toEqual('ERROR');
            expect(comp.success).toBeNull();
        });
    });
});
