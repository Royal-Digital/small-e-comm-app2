import { Component, HostBinding, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { HelperService } from './services/helper.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ontabee';
  addressNavEnable = false;
  endSideNav = false;
  themeNavEnable = false;
  enableAccount = 'signin';
  darkThemeEnable: boolean;

  lightTheme = false;
  themeColor:string = 'candy';
  @HostBinding('class') componentCssClass;

  constructor(private helperService: HelperService,  public overlayContainer: OverlayContainer, private themeService: ThemeService) {
    this.overlayContainer.getContainerElement().classList.add(this.themeColor+'-dark-theme');
    this.componentCssClass = this.themeColor+'-dark-theme';


    this.helperService.addressSideNav.subscribe(res => {
      this.addressNavEnable = res;
    });
    this.helperService.endSideNav.subscribe(res => {
      this.endSideNav = res;
    });
    this.helperService.enableAccount.subscribe(res => {
      this.enableAccount = res;
    });
    this.helperService.themeSideNav.subscribe(res => {
      this.themeNavEnable = res;
    });

 
    this.themeService.darkThemeEnable.subscribe(res => {
      this.darkThemeEnable = res;
      this.setTheme();
    });
    this.themeService.themeColor.subscribe(res =>{
      this.themeColor = res;
      this.setTheme();
    });
  }
  endSideNavCloseEvent(){
    this.helperService.themeSideNav.next(false);
  }
 setTheme(){
  if (this.darkThemeEnable) {
     this.removeThemeClass();    
    this.overlayContainer.getContainerElement().classList.add(this.themeColor+'-dark-theme');
    this.componentCssClass = this.themeColor+'-dark-theme';
  } else {
    this.removeThemeClass();    
    this.overlayContainer.getContainerElement().classList.add(this.themeColor+'-light-theme');
    this.componentCssClass = this.themeColor+'-light-theme';
  }
 }
 removeThemeClass (){
  const classList = this.overlayContainer.getContainerElement().classList;
  for (let index = 0; index < classList.length; index++) {
    const className = classList[index];
    if (className.indexOf('theme') > -1) {
      this.overlayContainer.getContainerElement().classList.remove(className);
    }
  }
 }
  changeTheme() {
    this.helperService.endSideNav.next(true);
    this.helperService.themeSideNav.next(true);
  }
}
