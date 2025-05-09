import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Teste Target';


  menorValor!: number;
  maiorValor!: number;
  mediaMensal!: number;

  ngOnInit(): void {
    this.menorValor = this.getMenorValor();
    this.maiorValor = this.getMaiorValor();
    this.mediaMensal = this.getMediaMensal();
  }

  private diario = [
    { dia: 1, valor: 200 },
    { dia: 2, valor: 450 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 780 },
    { dia: 5, valor: 120 },
  ];

  getMenorValor(): number {
    return Math.min(...this.diario.map(f => f.valor).filter(v => v > 0));
  }

  getMaiorValor(): number {
    return Math.max(...this.diario.map(f => f.valor));
  }

  getMediaMensal(): number {
    const valoresValidos = this.diario.map(f => f.valor).filter(v => v > 0);
    return valoresValidos.reduce((acc, v) => acc + v, 0) / valoresValidos.length;
  }
}
