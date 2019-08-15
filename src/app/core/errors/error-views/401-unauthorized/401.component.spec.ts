/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import {AppErrorModule} from "../../app-error.module";
/* Component imports */
import { Error401Component } from "./index";

describe("Error401Component", () => {
  let component: Error401Component;
  let fixture: ComponentFixture<Error401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error401Component);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io | 401 Unauthorized'", () => {
    fixture = TestBed.createComponent(Error401Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual(
      "MoarStats.io | 401 Unauthorized"
    );
  });
});
