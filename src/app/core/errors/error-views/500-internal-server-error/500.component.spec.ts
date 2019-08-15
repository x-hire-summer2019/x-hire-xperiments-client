/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import { AppErrorModule } from "../../app-error.module";
/* Component imports */
import { Error500Component } from "./index";

describe("Error500Component", () => {
  let component: Error500Component;
  let fixture: ComponentFixture<Error500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error500Component);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io | 500 Internal Server Error'", () => {
    fixture = TestBed.createComponent(Error500Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual(
      "MoarStats.io | 500 Internal Server Error"
    );
  });
});
