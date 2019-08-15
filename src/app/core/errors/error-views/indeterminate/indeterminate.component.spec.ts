/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

/* Service imports */
/* Module imports */
import { AppModule } from "../../../../app.module";
import { AppErrorModule } from "../../app-error.module";
/* Component imports */
import { ErrorIndeterminateComponent } from "./index";

describe("ErrorIndeterminateComponent", () => {
  let component: ErrorIndeterminateComponent;
  let fixture: ComponentFixture<ErrorIndeterminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, AppErrorModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorIndeterminateComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'MoarStats.io'", () => {
    fixture = TestBed.createComponent(ErrorIndeterminateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual("MoarStats.io");
  });
});
