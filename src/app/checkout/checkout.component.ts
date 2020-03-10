import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/Ilogin';
import { CartService } from '../services/cart.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  user: User;
  cartItems = new Array();
  
  paymentMethods = [
    {
      name: "PayPal",
      imageLink: "https://api.iconify.design/logos:paypal.svg"
    },
    {
      name: "Bitcoin",
      imageLink: "https://api.iconify.design/logos:bitcoin.svg"
    },
    {
      name: "Ethereum",
      imageLink: "https://api.iconify.design/logos:ethereum.svg"
    },
    {
      name: "Litecoin",
      imageLink: "https://api.iconify.design/simple-icons:litecoin.svg"
    },
    {
      name: "Balance",
      imageLink: "https://cdn-images-1.medium.com/fit/c/72/72/1*_p6XmoCae9kMDVTMqajk8g.png"
    }
  ];
  selectedPaymentMethod = this.paymentMethods[0];
  constructor(private router: Router, 
    public loginService: LoginService,
    private cartService: CartService,
    private helperService: HelperService) {
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    this.cartService.cart.subscribe(res => {
      this.cartItems = res;
    })
  }
  calculateTotalPriceOfCart () : number{
    let total = 0;
    this.cartItems.forEach(element => {
      total = total + (element.selectedType.price * element.quantity);
    });
    return total;
  }
  addToCart(item) {
   this.cartService.addToCart(item);
  }
  openLoginSideNav(){
    this.helperService.endSideNav.next(true);
  }

  setPaymentMethod(method){
    this.selectedPaymentMethod = method;
  }
}
