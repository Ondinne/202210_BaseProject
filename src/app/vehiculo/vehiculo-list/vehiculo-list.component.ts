import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})

export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  suma: number = 0;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();
    this.sumaRenault();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  sumaRenault() {
    let suma = 0;
    for (let i = 0; i < this.vehiculos.length; i++) {
        if (this.vehiculos[i].marca === "Renault")
        {
          suma += 1;
        }
    }
    return suma
  }

}
