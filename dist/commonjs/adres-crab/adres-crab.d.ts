import { BindingEngine } from 'aurelia-framework';
import { ValidationController, ValidationControllerFactory } from 'aurelia-validation';
import { Adres } from './models/locatie';
import { CrabService } from '../services/crab.api-service';
export declare class AdresCrab {
    controller: ValidationController;
    private controllerFactory;
    private crabService;
    private bindingEngine;
    data: Adres;
    landen: any[];
    gemeente: string;
    postcode: string;
    straat: string;
    huisnummer: string;
    private suggest;
    constructor(controller: ValidationController, controllerFactory: ValidationControllerFactory, crabService: CrabService, bindingEngine: BindingEngine);
    bind(): void;
    parseField(value: any, property: any): void;
    landChanged(nv: any, ov: any): void;
    gemeenteChanged(): void;
    straatChanged(): void;
    private loadLanden;
    private loadGemeenten;
    private loadPostcodes;
    private loadStraten;
    private loadHuisnrs;
    private suggestFilter;
}
