import { TestBed, async, tick, fakeAsync, inject } from '@angular/core/testing';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhipsterTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LoginModalService } from '../../../../../../main/webapp/app/shared';
import { ActivateService } from '../../../../../../main/webapp/app/account/activate/activate.service';
import { ActivateComponent } from '../../../../../../main/webapp/app/account/activate/activate.component';

=======
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { LoginModalService } from '../../../../../../main/webapp/app/shared';
import { Activate } from '../../../../../../main/webapp/app/account/activate/activate.service';
import { ActivateComponent } from '../../../../../../main/webapp/app/account/activate/activate.component';


>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
describe('Component Tests', () => {

    describe('ActivateComponent', () => {

        let comp: ActivateComponent;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
<<<<<<< HEAD
                imports: [JhipsterTestModule],
                declarations: [ActivateComponent],
                providers: [
                    ActivateService,
=======
                declarations: [ActivateComponent],
                providers: [MockBackend,
                    Activate,
                    BaseRequestOptions,
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({'key': 'ABC123'})
                    },
                    {
                        provide: LoginModalService,
                        useValue: null
                    }
                ]
<<<<<<< HEAD
            }).overrideTemplate(ActivateComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            const fixture = TestBed.createComponent(ActivateComponent);
=======
            }).overrideComponent(ActivateComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            let fixture = TestBed.createComponent(ActivateComponent);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            comp = fixture.componentInstance;
        });

        it('calls activate.get with the key from params',
<<<<<<< HEAD
            inject([ActivateService],
                fakeAsync((service: ActivateService) => {
=======
            inject([Activate],
                fakeAsync((service: Activate) => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    spyOn(service, 'get').and.returnValue(Observable.of());

                    comp.ngOnInit();
                    tick();

                    expect(service.get).toHaveBeenCalledWith('ABC123');
                })
            )
        );

        it('should set set success to OK upon successful activation',
<<<<<<< HEAD
            inject([ActivateService],
                fakeAsync((service: ActivateService) => {
=======
            inject([Activate],
                fakeAsync((service: Activate) => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    spyOn(service, 'get').and.returnValue(Observable.of({}));

                    comp.ngOnInit();
                    tick();

                    expect(comp.error).toBe(null);
                    expect(comp.success).toEqual('OK');
                })
            )
        );

        it('should set set error to ERROR upon activation failure',
<<<<<<< HEAD
            inject([ActivateService],
                fakeAsync((service: ActivateService) => {
=======
            inject([Activate],
                fakeAsync((service: Activate) => {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    spyOn(service, 'get').and.returnValue(Observable.throw('ERROR'));

                    comp.ngOnInit();
                    tick();

                    expect(comp.error).toBe('ERROR');
                    expect(comp.success).toEqual(null);
                })
            )
        );
    });
});
