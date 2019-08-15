/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import { AppErrorModule } from "../../app-error.module";
/* Component imports */
import { Error404Component } from "./index";

describe("Error404Component", () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io | 404 Not Found'", () => {
    fixture = TestBed.createComponent(Error404Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual("MoarStats.io | 404 Not Found");
  });
});
