import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
<<<<<<< HEAD
import { Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginModalService } from '../../../../../../../main/webapp/app/shared';
import { JhipsterTestModule } from '../../../../test.module';
import { PasswordResetFinishComponent } from '../../../../../../../main/webapp/app/account/password-reset/finish/password-reset-finish.component';
import { PasswordResetFinishService } from '../../../../../../../main/webapp/app/account/password-reset/finish/password-reset-finish.service';
import { MockActivatedRoute } from '../../../../helpers/mock-route.service';

=======
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginModalService } from '../../../../../../../main/webapp/app/shared';
import { Observable } from 'rxjs/Rx';
import { PasswordResetFinishComponent } from '../../../../../../../main/webapp/app/account/password-reset/finish/password-reset-finish.component';
import { PasswordResetFinish } from '../../../../../../../main/webapp/app/account/password-reset/finish/password-reset-finish.service';
import { MockActivatedRoute } from '../../../../helpers/mock-route.service';


>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
describe('Component Tests', () => {

    describe('PasswordResetFinishComponent', () => {

        let fixture: ComponentFixture<PasswordResetFinishComponent>;
        let comp: PasswordResetFinishComponent;

        beforeEach(() => {
            fixture = TestBed.configureTestingModule({
<<<<<<< HEAD
                imports: [JhipsterTestModule],
                declarations: [PasswordResetFinishComponent],
                providers: [
                    PasswordResetFinishService,
=======
                declarations: [PasswordResetFinishComponent],
                providers: [PasswordResetFinish,
                    MockBackend,
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
                        provide: LoginModalService,
                        useValue: null
                    },
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({'key': 'XYZPDQ'})
                    },
                    {
                        provide: Renderer,
                        useValue: {
                            invokeElementMethod(renderElement: any, methodName: string, args?: any[]) {}
                        }
                    },
                    {
                        provide: ElementRef,
                        useValue: new ElementRef(null)
                    }
                ]
<<<<<<< HEAD
            }).overrideTemplate(PasswordResetFinishComponent, '')
            .createComponent(PasswordResetFinishComponent);
            comp = fixture.componentInstance;
        });

        it('should define its initial state', () => {
=======
            }).overrideComponent(PasswordResetFinishComponent, {
                set: {
                    template: ''
                }
            }).createComponent(PasswordResetFinishComponent);
            comp = fixture.componentInstance;
        });

        it('should define its initial state', function () {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            comp.ngOnInit();

            expect(comp.keyMissing).toBeFalsy();
            expect(comp.key).toEqual('XYZPDQ');
            expect(comp.resetAccount).toEqual({});
        });

        it('sets focus after the view has been initialized',
            inject([ElementRef], (elementRef: ElementRef) => {
<<<<<<< HEAD
                const element = fixture.nativeElement;
                const node = {
=======
                let element = fixture.nativeElement;
                let node = {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                    focus() {}
                };

                elementRef.nativeElement = element;
                spyOn(element, 'querySelector').and.returnValue(node);
                spyOn(node, 'focus');

                comp.ngAfterViewInit();

                expect(element.querySelector).toHaveBeenCalledWith('#password');
                expect(node.focus).toHaveBeenCalled();
            })
        );

    });
});
