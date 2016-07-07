(function () {
    'use strict';
    angular.module('testApp', []);
}());

(function () {
    'use strict';
    angular
        .module('testApp')
        .controller('AppController', AppController);
    
    function AppController() {
        var vm = this;
        vm.data = [
            {"id": 21, "shortname": "Angell", "longname": "Angell Hall", "mais_number": null, "mais_name": null},
            {"id": 16, "shortname": "Baits I", "longname": "Baits I", "mais_number": null, "mais_name": null},
            {"id": 17, "shortname": "Baits II", "longname": "Baits II", "mais_number": null, "mais_name": null},
            {"id": 13, "shortname": "Beyster", "longname": "Bob & Betty Beyster Building", "mais_number": 1005092, "mais_name": "BEYST"},
            {"id": 1, "shortname": "Brown", "longname": "G. G. Brown", "mais_number": 1000407, "mais_name": "GGBL"},
            {"id": 18, "shortname": "Bursley", "longname": "Bursley", "mais_number": null, "mais_name": null},
            {"id": 2, "shortname": "Chrysler", "longname": "Chrysler Center", "mais_number": 1000443, "mais_name": "CHRYS"},
            {"id": 3, "shortname": "Cooley", "longname": "Cooley Lab", "mais_number": 1000403, "mais_name": "COOL"},
            {"id": 24, "shortname": "Couzens", "longname": "Couzens Hall", "mais_number": null, "mais_name": "COUZN"},
            {"id": 14, "shortname": "DC", "longname": "Duderstadt Center", "mais_number": null, "mais_name": null},
            {"id": 4, "shortname": "Dow", "longname": "Dow Building", "mais_number": 1000447, "mais_name": "DOW"},
            {"id": 5, "shortname": "EECS", "longname": "Electrical Engineering and Computer Science Building", "mais_number": 1000448, "mais_name": "EECS"},
            {"id": 7, "shortname": "EWRE", "longname": "Environmental and Water Resources Engineering Building", "mais_number": 1000414, "mais_name": "EWRE"},
            {"id": 8, "shortname": "FXB", "longname": "François-Xavier Bagnoud Building", "mais_number": 1000395, "mais_name": "FXB"},
            {"id": 6, "shortname": "GFL", "longname": "Gorguze Family Laboratory", "mais_number": 1000424, "mais_name": "GFL"},
            {"id": 9, "shortname": "IOE", "longname": "Industrial and Operations Engineering Building", "mais_number": 1000429, "mais_name": "IOE"},
            {"id": 12, "shortname": "LBME", "longname": "Lurie Biomedical Engineering Building", "mais_number": 1000406, "mais_name": "LBME"},
            {"id": 29, "shortname": "LEC", "longname": "Lurie Engineering Center", "mais_number": null, "mais_name": null},
            {"id": 25, "shortname": "Markley", "longname": "Markley Hall", "mais_number": null, "mais_name": "MMARK"},
            {"id": 22, "shortname": "Mojo", "longname": "Mosher-Jordan", "mais_number": null, "mais_name": null},
            {"id": 10, "shortname": "NAME", "longname": "Naval Architecture and Marine Engineering Building", "mais_number": 1000415, "mais_name": "NAME"},
            {"id": 15, "shortname": "Pierpont", "longname": "Pierpont Commons", "mais_number": 1000442, "mais_name": "PIER"},
            {"id": 19, "shortname": "RAC", "longname": "Ross Academic Center", "mais_number": null, "mais_name": null},
            {"id": 23, "shortname": "SEB", "longname": "School of Education Building", "mais_number": null, "mais_name": null},
            {"id": 20, "shortname": "Shapiro", "longname": "Shapiro Undergraduate Library", "mais_number": null, "mais_name": null},
            {"id": 11, "shortname": "SRB", "longname": "Space Research Building", "mais_number": 1000441, "mais_name": "SRB"},
            {"id": 26, "shortname": "Stockwell", "longname": "Stockwell Hall", "mais_number": null, "mais_name": "STOCK"},
            {"id": 28, "shortname": "Union", "longname": "Michigan Union", "mais_number": 1000120, "mais_name": "UNION"},
            {"id": 27, "shortname": "West Quad", "longname": "West Quad", "mais_number": null, "mais_name": "WQ"}
        ];
    }
}());