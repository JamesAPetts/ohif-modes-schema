import metadataProvider from "../../../platform/core/src/classes/MetadataProvider";
​
const DICOMMetadataStore = {
    studies: [{
        seriesLists: [
            {
            // Series in study from dicom web server 1 (or different backend 1)
                series: [{
                    instances: [{
                        ...instanceMetadata // Naturalized DICOM.
                    }],
                    ...seriesMetadata
                }],
                clientName
            },
            {
            // Series in study from dicom web server 2 (or different backend 2)
            },
        ],
        ...studyMetadata,
    }]
}

console.log(DICOMMetadataStore);

// ​
// // Instance Metadata provider now searches our _studies object and returns.
// // Metadata provider doesn't store its own data.
// ​
// {
//   get, // cornerstone specific
//   ...otherMethodsThatAreOHIFSpecific
// }
// metadataProvider.get('');
// ​
// ​
// ​
// const someDataServiceImplementation = {
//   clients: [
//     //client
//     {
//       uid,
//       //
//     }
//   ]
// }
// ​
// ​
// // We have a mode which views data, that we retieved via WADO-RS.
// // Now we want to download the P10 (and we aren't going to be clever and make on the client)
// // We need to know where the WADO and QIDO endpoints are for this image.
// someDataServiceImplementation.getOrigin(UIDs);
// ​
// ​
// ​
// // Internal to fetchy service. Map populated on QIDO-RS/WADO-RS calls.
// function getOrigin(UIDs) {
//   return {
//     // data fetching client
//   };
// }
// ​
// _funnyViewmodelObject = {
//   displaySetsPerStudy: [
//     {
//       StudyInstanceUID,
//       displaySets: [
//         {
//           cornerstoneImageIds: [],
//           SeriesInstanceUID,
//           ...otherStandardProps,
//           ...otherPropsDependingOnSOPClassHandler,
//         },
//       ],
//     },
//   ],
// };