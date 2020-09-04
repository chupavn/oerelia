import { GridOptions } from 'ag-grid-community';
import { CrabService } from '../services/crab.api-service';
import { DialogController } from 'aurelia-dialog';
export declare class ActorWidget {
    private crabService;
    scope: any;
    actorenApiService: any;
    dialogController: DialogController;
    showSpinner: boolean;
    gridOptions: GridOptions;
    zoekterm: string;
    selectedActor: any;
    showTable: boolean;
    showActor: boolean;
    showFilters: boolean;
    isAdvancedSearch: boolean;
    landen: any[];
    gemeenten: any[];
    postcodes: any[];
    straten: any[];
    huisnrs: any[];
    suggest: any;
    private filters;
    constructor(crabService: CrabService);
    bind(): void;
    setRowData(): void;
    keydown(e: any): boolean;
    onGridReady(): void;
    onGridSizeChanged(): void;
    search(): void;
    refresh(): void;
    advancedSearch(): void;
    clearFilters(): void;
    toggleFilters(activate: boolean): void;
    selectActor(params: any): void;
    toggleActorDetail(activate: boolean, params: any): void;
    toevoegen(): void;
    annuleren(): void;
    private actiesCellRenderer;
    private loadLanden;
    private loadGemeenten;
    private loadPostcodes;
    private loadStraten;
    private loadHuisnrs;
}