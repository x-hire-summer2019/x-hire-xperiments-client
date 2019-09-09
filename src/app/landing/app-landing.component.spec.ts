/* Angular imports */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
/* Service imports */
/* Module imports */
import { AppModule } from "../app.module";
/* Component imports */
import { LandingComponent } from "./index";

describe("UserLoginComponent", () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have as title 'BpiClient - log in'", () => {
    fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleService.getTitle()).toEqual("BpiClient - log in");
  });

  it("should render input and name + password input field has default value", () => {
    fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const inputElement = compiled.queryAll(By.css("input"));
    const nameInput = inputElement[0].nativeElement;
    const passInput = inputElement[1].nativeElement;

    expect(nameInput.value).toBe("");
    expect(passInput.value).toBe("");
  });

  it("should render input and name + password input field has expected value", () => {
    fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const name = "User Name";
    const password = "Password";
    const compiled = fixture.debugElement;
    const inputElement = compiled.queryAll(By.css("input"));
    const nameInput = inputElement[0].nativeElement;
    const passInput = inputElement[1].nativeElement;
    nameInput.value = name;
    passInput.value = password;

    expect(nameInput.value).toBe(name);
    expect(passInput.value).toBe(password);
  });
});
