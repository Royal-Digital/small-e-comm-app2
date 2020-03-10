import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { HelperService } from 'src/app/services/helper.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MdePopoverTrigger } from '@material-extended/mde';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren(MdePopoverTrigger) trigger: QueryList<MdePopoverTrigger>;
  user: User;
  quantityList = [1,2,3,4,5,6,7,8,9,10];

  deliveryAddresses = new Array();

  cartItems = new Array();
  selectedSearchFood: any;

  currentRoute: string;
  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog,
    private cartService: CartService,
    public loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) { 
    // this.router.events.subscribe(
    //   (event: any) => {
    //     if (event instanceof NavigationEnd) {
    //       this.currentRoute = this.router.url;
    //     }
    //   }
    // );
  }

  openAddressSideNav (){
    this.helperService.addressSideNav.next(true);
  }
  openLoginSideNav(){
    this.helperService.endSideNav.next(true);
  }
  ngOnInit() {
    this.cartService.cart.subscribe(res => {
      this.cartItems = res;
    });
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
  }



 

  deliveryAddressChange(event) {
    console.log(event);
  }
  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cartItems.forEach(element => {
      total = total + (element.selectedType.price * element.quantity);
    });
    return total;
  }
  logout() {
    this.user = null;
    this.loginService.loggedIn.next(this.user);
    this.router.navigate(['home']);
  }
  // addToCart(item) {
  //   this.cartService.addToCart(item);
  // }
  closeCartPopover() {
    this.trigger.toArray()[0].togglePopover();
  }
  
}
