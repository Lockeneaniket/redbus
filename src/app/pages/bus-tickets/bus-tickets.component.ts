import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-tickets',
  standalone: true,
  templateUrl: './bus-tickets.component.html',
  styleUrl: './bus-tickets.component.scss'
})
export class BusTicketsComponent implements OnInit {
  from: string | null = '';
  to: string | null = '';
  date: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get query parameters from URL
    this.route.queryParams.subscribe(params => {
      this.from = params['from'] || '';
      this.to = params['to'] || '';
      this.date = params['date'] || '';
    });
  }
}
