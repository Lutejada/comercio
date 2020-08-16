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
  top_banner:object = null;

  constructor(private produtsService:ProdutsService) { }

  ngOnInit(): void {

    this.produtsService.getData()
      .subscribe(resp => {
        console.log("resp", resp);
        // Encuentro la longitud o cantidad de productos
        let i;
        let size = 0;
        for (i in resp){
          size++
        }

        // Generar numero aleatorio por el numero de productos
        let index = Math.floor(Math.random()*size)
        console.log("size",size)
        console.log(index)

        // Devolvemos a la vista un banner aleatorio
        this.top_banner = JSON.parse(resp[Object.keys(resp)[index]].top_banner);
        console.log("this.top_banner",this.top_banner);
      })
  }

}
