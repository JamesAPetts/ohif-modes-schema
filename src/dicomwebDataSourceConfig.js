import { dataSourceModule } from "@ohif/extension-default"; // Example
import { DataSourceService } from "@ohif/core";

const { DICOMWebDataSource } = dataSourceModule;

DataSourceService.registerDatasource({
    sourceType: "dicomweb",
    source: DICOMWebDataSource,
    config: {
        servers: [
            {
                name: "DCM4CHEE",
                wadoUriRoot:
                    "https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado",
                qidoRoot:
                    "https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs",
                wadoRoot:
                    "https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs",
                qidoSupportsIncludeField: true,
                imageRendering: "wadors",
                thumbnailRendering: "wadors"
            }
        ],
        enableStudyLazyLoad: true
    }
});
