import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter-confirm',
  templateUrl: './newsletter-confirm.component.html',
  styleUrls: ['./newsletter-confirm.component.css']
})
export class NewsletterConfirmComponent implements OnInit {
  currentRoute: string = this.router.url;
  @Input() showNewsletter: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showNewsletter = false;
  }

}
