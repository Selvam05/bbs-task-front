import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Registration } from 'src/app/services/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';
import { deserialize } from 'serializer.ts/Serializer';

@Component({
    selector: 'app-reg-list',
    templateUrl: './reg-list.component.html',
    styleUrls: ['./reg-list.component.css']
})
export class RegListComponent implements OnInit {
    public gridOptions: GridOptions | any;
    frameworkComponents: any;
    columnDefs: any
    listUser: Registration[] = [];

    constructor(public registrationService: RegistrationService) { }

    ngOnInit(): void {
        this.createDataGrid();
        this.registrationService.findAllUser().subscribe((res) => {
            this.listUser = deserialize<Registration[]>(Registration, res);
            if (this.listUser.length > 0) {
                this.gridOptions?.api?.setRowData(this.listUser)
            } else {
                this.gridOptions?.api?.setRowData([]);
            }
        });
    }
    
    createDataGrid() {
        this.gridOptions = {
            paginationPageSize: 10,
            rowSelection: 'single',
        };
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.enableRangeSelection = true;
        this.gridOptions.animateRows = true;
        this.gridOptions.columnDefs = [
            {
                headerName: 'Name',
                width: 100,
                flex: 1,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                field: 'name',
            },
            {
                headerName: 'Email',
                width: 100,
                flex: 1,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                field: 'email',
            },
            {
                headerName: 'Gender',
                width: 25,
                flex: 1,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                field: 'gender',
            },
            {
                headerName: 'Category',
                width: 100,
                flex: 1,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                field: 'category',
            }
        ]
    }
}
