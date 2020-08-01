import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';
import { ProdutsService } from '../../services/produts.service';


@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {
  path:String = Path.url;

  constructor(private produtsService:ProdutsService) { }

  ngOnInit(): void {

    this.produtsService.getData()
      .subscribe(resp => {
        console.log("resp", resp);
      })
  }

}
