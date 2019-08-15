/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import { AppErrorModule } from "../../app-error.module";
/* Component imports */
import { Error403Component } from "./index";

describe("Error403Component", () => {
  let component: Error403Component;
  let fixture: ComponentFixture<Error403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error403Component);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io | 403 Forbidden'", () => {
    fixture = TestBed.createComponent(Error403Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual("MoarStats.io | 403 Forbidden");
  });
});
