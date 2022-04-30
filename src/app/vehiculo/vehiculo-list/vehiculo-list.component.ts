import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { VehiculoModule } from '../vehiculo.module';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  marca: string;
  suma: number;

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  sumaMarca() {
    for (let i = 0; i < this.vehiculos.length; i++) {
      if (this.marca === "Renault") {
        this.suma += 1;
      } else if (this.marca == "Chevrolet") {
        this.suma += 1;
      } else if (this.marca == "Nissan") {
        this.suma += 1;
      }
    }
    return this.suma;
  }

  ngOnInit() {
    this.getVehiculos();
    this.sumaMarca();
  }

}
