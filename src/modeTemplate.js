const mode = ({}) => {
    return {
        id: 'my-mode',
        validationTags: {
            study: ["ModalitiesInStudy"],
            series: ["Modality"]
        },
        isValidMode: (studyTags, seriesTags) => {
            //Example MR needed in study:
            return studyTags.ModalitiesInStudy.includes('MR');
        },
        routes: [{
            path: 'viewer/:someTemplateParameterProp',
            /**
             * ~~ LIFECYCLE
             */
            preInit: ({toolbarManager}) => {
                toolbarManager.addButtons({
                name: 'xxx',
                type: TOOLBAR_TYPE.TOGGLE,
                options: {}
                });
            ​
                toolbarManager.setDefaultLoadOut([
                // Primary
                ["WWWC", "Zoom", {label: 'more', buttons: ["my-nested-button"]} ],
                // Secondary
                ["ArrowAnnotate"],
                ]);
                toolbarManager.addLoadOut("CardiacTools", [
                // Primary
                ["WWWC"],
                // Secondary
                ["ArrowAnnotate"]
                ]);
            },
            // Need a way to specify query params?
        ​
            layoutTemplate: ({ routeProps, }) => {
            return {
                id: 'org.ohif.defaults.viewerlayout',
                props: { // named slots
                leftPanels: ['org.ohif.defaults.seriesList'],
                rightPanels: ['org.ohif.defaults.seg', 'org.ohif.defaults.measure'],
                viewports: ['org.ohif.defaults.cornerstoneViewport', 'org.ohif.defaults.vtkViewport'],
                }
            }
            },
            hotkeys: [],
            /**
             *
             */
            onStepChange: (previousStep, currentStep) => {
            if (currentstep === 4) {
                toolbarManager.setLoadOut("CardiacTools");
            };
            // Seg Panel
            extensionsManager.disable('org.ohif.defaults.seg')
            extensionsManager.enable('org.ohif.defaults.measure')
            // Measurement Panel
            extensionsManager.enable('org.ohif.defaults.seg')
            extensionsManager.disable('org.ohif.defaults.measure')
            },
        }],
        services: '?',
        extensions: ['org.ohif.defaults', 'org.ohif.cornerstone', 'org.ohif.vtk'],
    }
}





const mode = ({}) => {
    return {
        id: 'my-mode',
        validationTags: {
            study: ["ModalitiesInStudy"],
            series: ["Modality"]
        },
        isValidMode: (studyTags, seriesTags) => {
            return studyTags.ModalitiesInStudy.includes('MR');
        },
        routes: [{
            path: 'viewer/:someTemplateParameterProp',
            preInit: ({toolbarManager}) => {},
            layoutTemplate: ({}) => {
                return {
                    id: 'org.ohif.defaults.viewerlayout',
                    props: { // named slots
                        leftPanels: ['org.ohif.defaults.seriesList'],
                        rightPanels: ['org.ohif.defaults.measure'],
                        viewports: ['org.ohif.cornerstone.viewport', 'org.ohif.vtk.viewport'],
                    }   
                }
            },
            hotkeys: [],
            onStepChange: (previousStep, currentStep) => {},
        }],
        extensions: ['org.ohif.defaults', 'org.ohif.cornerstone', 'org.ohif.vtk'],
    }
}