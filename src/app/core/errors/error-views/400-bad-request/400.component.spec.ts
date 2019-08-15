/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import { AppErrorModule } from "../../app-error.module";
/* Component imports */
import { Error400Component } from "./index";

describe("Error400Component", () => {
  let component: Error400Component;
  let fixture: ComponentFixture<Error400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error400Component);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io | 400 Bad Request'", () => {
    fixture = TestBed.createComponent(Error400Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual(
      "MoarStats.io | 400 Bad Request"
    );
  });
});
