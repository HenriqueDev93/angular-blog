import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentPhoto: string = '';
  contentTitle: string = '';
  contentDescription1: string = '';
  contentDescription2: string = '';
  contentDescription3: string = '';
  contentDescription4: string = '';
  contentDescription5: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) {};

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
      );

      this.setValuesToComponent(this.id)
  };

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter(article => article.id.toString() === id)[0];
    if(result) {
      this.contentTitle = result.title;
      this.contentPhoto = result.photo;
      this.contentDescription1 = result.description1;
      this.contentDescription2 = result.description2;
      this.contentDescription3 = result.description3;
      this.contentDescription4 = result.description4;
      this.contentDescription5 = result.description5;
    }
  };
}
