import { Component } from '@angular/core';
import Produto from "./models/produto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaProdutos: Produto[] = new Array<Produto>();

  constructor(){
    this.listaProdutos.push(new Produto("Cinnamon Roll", "Bolinho de canela com açucar", 3.00, "https://assets.delirec.com/images%2Foe7jdXAKXvVdnXyx53hA5xY1cRf2%2Frecipe%2Fe3113b44-b750-4cf5-a40a-803274762952-cinnamon-roll-enroladinho-de-canela-gallery-0"));
    this.listaProdutos.push(new Produto("Torta de Limão", "Torta feita com mousse de limão, massa e chantilly", 8.00, "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/dessert/image-thumb__98508__RecipeDetailsLightBox/torta-de-limao.jpg"));
    this.listaProdutos.push(new Produto("Torta escocesa amanteigada", "Feita com bolacha, creme amanteigado e chocolate", 25.00, "https://static.itdg.com.br/images/1200-630/84b058dd29498fe4d2e743846b0e715a/359089-original.jpg"));
    this.listaProdutos.push(new Produto("Rosquinhas", "Massas com cobertura de chocolate, morango ou baunilha", 3.50, "https://www.receiteria.com.br/wp-content/uploads/receitas-de-rosquinha-01.jpg"));
  }
}